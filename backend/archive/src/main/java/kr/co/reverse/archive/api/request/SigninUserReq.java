package kr.co.reverse.archive.api.request;

import lombok.Getter;

@Getter
public class SigninUserReq {
    private String authId;
    private String nickname;
}
