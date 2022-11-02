package kr.co.reverse.auth.api.controller;

import kr.co.reverse.auth.api.request.LoginReq;
import kr.co.reverse.auth.api.request.SignupReq;
import kr.co.reverse.auth.api.request.TokenReq;
import kr.co.reverse.auth.api.response.AuthRes;
import kr.co.reverse.auth.api.response.BaseResponseBody;
import kr.co.reverse.auth.api.response.TokenRes;
import kr.co.reverse.auth.api.service.AuthService;
import kr.co.reverse.auth.common.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.StringTokenizer;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final JwtTokenProvider jwtTokenProvider;

    private final AuthService authService;

    @PostMapping("/sign-up")
    public ResponseEntity signUp(@Valid @RequestBody SignupReq authInfo){

        authService.signUp(authInfo);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/login")
    public ResponseEntity<? extends TokenRes> login(@Valid @RequestBody LoginReq loginInfo, HttpServletResponse response){

        AuthRes auth = authService.login(loginInfo, response);

        return ResponseEntity.ok(TokenRes.of(auth));
    }

    @PostMapping("/reissue")
    public ResponseEntity<? extends TokenRes>  reissue(@RequestBody TokenReq tokenInfo) {

        AuthRes auth = authService.reissue(tokenInfo);

        return ResponseEntity.ok(TokenRes.of(auth));
    }

    @GetMapping("/{email}")
    public ResponseEntity checkDuplicateEmail(@PathVariable(name = "email") String email){

        authService.checkDuplicateEmail(email);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();

    }

    @GetMapping("/logout")
    public ResponseEntity logout(@RequestBody TokenReq tokenInfo){

        authService.logout(tokenInfo);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }


    @DeleteMapping("/sign-out")
    public ResponseEntity deleteUser(@RequestBody TokenReq tokenInfo){

        authService.deleteUser(tokenInfo);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }
}
