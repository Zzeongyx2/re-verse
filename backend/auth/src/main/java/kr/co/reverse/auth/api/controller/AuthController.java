package kr.co.reverse.auth.api.controller;

import kr.co.reverse.auth.api.request.LoginReq;
import kr.co.reverse.auth.api.request.SignupReq;
import kr.co.reverse.auth.api.response.BaseResponseBody;
import kr.co.reverse.auth.api.response.TokenRes;
import kr.co.reverse.auth.api.service.AuthService;
import kr.co.reverse.auth.common.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final JwtTokenProvider jwtTokenProvider;

    private final AuthService authService;

    @PostMapping("/sign-up")
    public ResponseEntity<? extends BaseResponseBody> signUp(@Valid @RequestBody SignupReq authInfo){

        boolean flag = authService.signUp(authInfo);

        if(flag){
            return ResponseEntity.status(200).body(BaseResponseBody.of(2000, "success"));
        }else{
            return ResponseEntity.status(200).body(BaseResponseBody.of(4090, "fail"));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<? extends BaseResponseBody> login(@Valid @RequestBody LoginReq loginInfo, HttpServletResponse response){

        TokenRes token = authService.login(loginInfo, response);
//        String token = authService.login(loginInfo, response);

        if(token != null){
            System.out.println(token.getAccessToken() + " " + token.getRefreshToken());
            return ResponseEntity.status(200).body(BaseResponseBody.of(2000, "success"));
        }else{
            return ResponseEntity.status(200).body(BaseResponseBody.of(4090, "fail"));
        }
    }

    //TODO : 로그아웃

    //TODO : 탈퇴하기
}
