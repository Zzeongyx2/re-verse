package kr.co.reverse.archive.api.response;

import com.querydsl.core.annotations.QueryProjection;
import kr.co.reverse.archive.db.entity.Friend;
import kr.co.reverse.archive.db.entity.User;
import kr.co.reverse.archive.db.repository.FriendRepositoryCustom;
import lombok.*;

import java.util.UUID;

@Data
@NoArgsConstructor
public class FriendRes {

    private UUID friendUserId;

    private String nickname;

    private String avatar;

    private String message;

    @QueryProjection
    @Builder
    public FriendRes(UUID friendUserId, String nickname, String avatar, String message){
        this.friendUserId = friendUserId;
        this.nickname = nickname;
        this.avatar = avatar;
        this.message = message;
    }


}
