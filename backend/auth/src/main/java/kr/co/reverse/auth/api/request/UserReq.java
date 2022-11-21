package kr.co.reverse.auth.api.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Builder
public class UserReq {

    private String authId;
    private String nickname;
}
