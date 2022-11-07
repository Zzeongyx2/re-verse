package kr.co.reverse.archive.api.response;

import com.querydsl.core.annotations.QueryProjection;
import kr.co.reverse.archive.db.entity.User;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
public class UserRes {

    private UUID userId = null;

    private String nickname;

    private String message;

    private String avatar;

    @QueryProjection
    @Builder
    public UserRes(UUID userId, String nickname, String message, String avatar) {
        this.userId = userId;
        this.nickname = nickname;
        this.message = message;
        this.avatar = avatar;
    }

}
