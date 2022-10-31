package kr.co.reverse.auth.api.service;

import kr.co.reverse.auth.api.request.LoginReq;
import kr.co.reverse.auth.api.request.SignupReq;
import kr.co.reverse.auth.api.request.TokenReq;
import kr.co.reverse.auth.api.response.AuthRes;
import kr.co.reverse.auth.api.response.TokenRes;
import kr.co.reverse.auth.common.error.ErrorCode;
import kr.co.reverse.auth.common.exception.EmailDuplicateException;
import kr.co.reverse.auth.common.exception.IncorrectEmailOrPasswordException;
import kr.co.reverse.auth.common.jwt.JwtTokenProvider;
import kr.co.reverse.auth.common.util.CookieUtil;
import kr.co.reverse.auth.db.entity.Auth;
import kr.co.reverse.auth.db.entity.Authority;
import kr.co.reverse.auth.db.repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

@RequiredArgsConstructor
@Service
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
    private final RedisService redisService;
    private final AuthRepository authRepository;
    private final CookieUtil cookieUtil;

    @Transactional
    public void signUp(SignupReq signInfo){

//        validateSignUpInfo(signInfo);

        if(authRepository.existsByEmail(signInfo.getEmail())){
            throw new IllegalArgumentException();
        }else{
            Auth auth = Auth.builder()
                    .id(UUID.randomUUID().toString())
                    .email(signInfo.getEmail())
                    .password(passwordEncoder.encode(signInfo.getPassword()))
                    .authority(Authority.ROLE_USER)
                    .build();
            authRepository.save(auth);
        }
    }

    public AuthRes login(LoginReq loginInfo, HttpServletResponse response) {

        if(authRepository.findByEmail(loginInfo.getEmail()).orElse(null) == null){
            throw new IllegalArgumentException();
//            return null;
        }else{
            //1. email, password를 기반으로 authentication 객체 생성
            UsernamePasswordAuthenticationToken authenticationToken = loginInfo.toAuthentication();

            //2. 실제 검증(비밀번호 체크)
            // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
            Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

            //3. 토큰 생성
            AuthRes tokenInfo = jwtTokenProvider.generateTokenDto(authentication);

            //4. redis에 refresh token 저장
            redisService.setValues(authentication.getName(), tokenInfo.getRefreshToken());

//            TokenRes token = new TokenRes(tokenInfo.getAccessToken(), tokenInfo.getRefreshToken());
//            HttpHeaders httpHeaders = new HttpHeaders();
//            httpHeaders.add("Authorization", "Bearer " + tokenInfo.getAccessToken());
//            response.setHeader("Authorization", "Bearer " + tokenInfo.getAccessToken());

            Cookie accessToken = cookieUtil.addAccessCookie(tokenInfo.getAccessToken());
            response.addCookie(accessToken);

            Cookie refreshToken = cookieUtil.addRefreshCookie(tokenInfo.getRefreshToken());
            response.addCookie(refreshToken);

            return tokenInfo;
        }
    }

    @Transactional
    public AuthRes reissue(TokenReq tokenInfo) {
//        // 1. Refresh Token 검증
//        if (!tokenProvider.validateToken(tokenRequestDto.getRefreshToken())) {
//            throw new RuntimeException("Refresh Token 이 유효하지 않습니다.");
//        }
//
//        // 2. Access Token 에서 Member ID 가져오기
//        Authentication authentication = tokenProvider.getAuthentication(tokenRequestDto.getAccessToken());
//
//        // 3. 저장소에서 Member ID 를 기반으로 Refresh Token 값 가져옴
//        RefreshToken refreshToken = refreshTokenRepository.findByKey(authentication.getName())
//                .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));
//
//        // 4. Refresh Token 일치하는지 검사
//        if (!refreshToken.getValue().equals(tokenRequestDto.getRefreshToken())) {
//            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
//        }
//
//        // 5. 새로운 토큰 생성
//        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);
//
//        // 6. 저장소 정보 업데이트
//        RefreshToken newRefreshToken = refreshToken.updateValue(tokenDto.getRefreshToken());
//        refreshTokenRepository.save(newRefreshToken);
//
//        // 토큰 발급
//        TokenResponseDto tokenResponseDto = new TokenResponseDto(tokenDto.getAccessToken(), tokenDto.getRefreshToken());
//        return tokenResponseDto;

        Authentication authentication = jwtTokenProvider.getAuthentication(tokenInfo.getAccessToken());
        redisService.checkRefreshToken(authentication.getName(), tokenInfo.getRefreshToken());

        // 예외 처리 통과후 토큰 재생성
        AuthRes token = jwtTokenProvider.generateTokenDto(authentication);
//        TokenRes tokenResponseDto = new TokenRes(tokenDto.getAccessToken(), tokenDto.getRefreshToken());
        return token;
    }

}
