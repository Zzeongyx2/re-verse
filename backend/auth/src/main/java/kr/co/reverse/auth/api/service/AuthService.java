package kr.co.reverse.auth.api.service;

import kr.co.reverse.auth.api.request.LoginReq;
import kr.co.reverse.auth.api.request.SignupReq;
import kr.co.reverse.auth.api.request.TokenReq;
import kr.co.reverse.auth.api.response.AuthRes;
import kr.co.reverse.auth.common.exception.EmailDuplicateException;
import kr.co.reverse.auth.common.exception.ExpiredTokenException;
import kr.co.reverse.auth.common.exception.IncorrectEmailOrPasswordException;
import kr.co.reverse.auth.common.jwt.JwtTokenProvider;
import kr.co.reverse.auth.common.util.CookieUtil;
import kr.co.reverse.auth.db.entity.Auth;
import kr.co.reverse.auth.db.entity.Authority;
import kr.co.reverse.auth.db.entity.StatusCode;
import kr.co.reverse.auth.db.entity.UserStatus;
import kr.co.reverse.auth.db.repository.AuthRepository;
import kr.co.reverse.auth.db.repository.UserStatusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
    private final RedisService redisService;
    private final AuthRepository authRepository;
    private final CookieUtil cookieUtil;
    private final UserStatusRepository userStatusRepository;

    @Transactional
    public void signUp(SignupReq signInfo){

        if(authRepository.existsByEmail(signInfo.getEmail())){
            throw new IllegalArgumentException();
        }else{

            UserStatus status = UserStatus.builder()
                    .userStatusCode(StatusCode.ACTIVE)
                    .build();
            userStatusRepository.save(status);

            Auth auth = Auth.builder()
                    .email(signInfo.getEmail())
                    .password(passwordEncoder.encode(signInfo.getPassword()))
                    .authority(Authority.ROLE_USER)
                    .userStatus(status)
                    .build();
            authRepository.save(auth);
        }
    }

    public AuthRes login(LoginReq loginInfo, HttpServletResponse response) {

        if(authRepository.findByEmail(loginInfo.getEmail()).orElse(null) == null){
            throw new IncorrectEmailOrPasswordException();
        }else{

            //탈퇴한 회원이면 로그인 불가능
            Auth auth = authRepository.findByEmail(loginInfo.getEmail()).get();
            if(auth.getUserStatus().getUserStatusCode().equals(StatusCode.DELETED)){
                throw new IncorrectEmailOrPasswordException();
            }

            //1. email, password를 기반으로 authentication 객체 생성
            UsernamePasswordAuthenticationToken authenticationToken = loginInfo.toAuthentication();

            //2. 실제 검증(비밀번호 체크)
            // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
            Authentication authentication = null;
            try{
                authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
            }catch (AuthenticationException e){
                throw new IncorrectEmailOrPasswordException();
            }

            //3. 토큰 생성
            AuthRes tokenInfo = jwtTokenProvider.generateTokenDto(authentication);

            //4. redis에 refresh token 저장
            redisService.setValues(tokenInfo.getRefreshToken(), authentication.getName());
            redisService.setValues(tokenInfo.getAccessToken(), authentication.getName());

            return tokenInfo;
        }
    }

    @Transactional
    public AuthRes reissue(TokenReq tokenInfo) {

        Authentication authentication = jwtTokenProvider.getAuthentication(tokenInfo.getAccessToken());

        redisService.checkRefreshToken(authentication.getName(), tokenInfo.getRefreshToken());

        // 예외 처리 통과후 토큰 재생성
        AuthRes token = jwtTokenProvider.generateTokenDto(authentication);

        //redis에 이전 accesstoken 삭제 후 새로운거 추가
        redisService.deleteValues(tokenInfo.getAccessToken());
        redisService.setValues(token.getAccessToken(), authentication.getName());

        return token;
    }

    @Transactional
    public void deleteUser(TokenReq tokenInfo){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Auth auth = authRepository.findByEmail(authentication.getName()).get();

        auth.getUserStatus().setUserStatusCode(StatusCode.DELETED);

        //레디스에 해당 유저 삭제
        redisService.deleteValues(tokenInfo.getAccessToken());
        redisService.deleteValues(tokenInfo.getRefreshToken());;
    }

    public void logout(TokenReq tokenInfo) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Auth auth = authRepository.findByEmail(authentication.getName()).get();

        //레디스에 해당 유저 삭제
        redisService.deleteValues(tokenInfo.getAccessToken());
        redisService.deleteValues(tokenInfo.getRefreshToken());

    }

    public void checkDuplicateEmail(String email) {

        Auth auth = authRepository.findByEmail(email).get();

        if(auth != null){
            throw new EmailDuplicateException();
        }

    }
}
