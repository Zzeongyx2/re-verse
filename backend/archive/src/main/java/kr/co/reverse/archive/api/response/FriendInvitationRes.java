package kr.co.reverse.archive.api.response;

import com.querydsl.core.annotations.QueryProjection;
import kr.co.reverse.archive.db.entity.FriendInvitation;
import kr.co.reverse.archive.db.entity.User;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class FriendInvitationRes {

    private String nickname;

    private String avatar;

    private String message;

    @QueryProjection
    @Builder
    public FriendInvitationRes(String nickname, String avatar, String message){
        this.nickname = nickname;
        this.avatar = avatar;
        this.message = message;

    }

    public static FriendInvitationRes of(User user) {
        if (user == null) return null;

        FriendInvitationRes friendInvitationRes = new FriendInvitationRes();

        friendInvitationRes.setNickname(user.getNickname());
        friendInvitationRes.setAvatar(user.getAvatar().toString());
        friendInvitationRes.setMessage(user.getMessage());

        return friendInvitationRes;

    }

}
