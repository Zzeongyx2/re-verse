package kr.co.reverse.auth.api.response;

import lombok.*;

@Getter
@Setter
public class TokenRes{
    private String accessToken;
    private String refreshToken;

    public static TokenRes of(AuthRes auth){
        if(auth == null){
            return null;
        }

        TokenRes res = new TokenRes();

        res.setAccessToken(auth.getAccessToken());
        res.setRefreshToken(auth.getRefreshToken());

        return res;
    }
}
