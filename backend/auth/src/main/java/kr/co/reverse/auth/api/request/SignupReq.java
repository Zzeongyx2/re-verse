package kr.co.reverse.auth.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupReq {

    private String email;
    private String password;
    private String nickname;
}
