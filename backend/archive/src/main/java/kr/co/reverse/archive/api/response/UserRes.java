package kr.co.reverse.archive.api.response;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class UserRes {

    private UUID userId;

    private String nickname;

    private String message;

    private Integer avatar;

    @QueryProjection
    public UserRes(UUID userId, String nickname, String message, Integer avatar) {
        this.userId = userId;
        this.nickname = nickname;
        this.message = message;
        this.avatar = avatar;
    }
}
