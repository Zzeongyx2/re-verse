package kr.co.reverse.auth.api.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class AuthRes {

    private String grantType;
    private String accessToken;
    private String refreshToken;
    private Long accessTokenExpirationTime;
    private Long refreshTokenExpirationTime;


}
