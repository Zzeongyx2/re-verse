package kr.co.reverse.archive.api.response;

import kr.co.reverse.archive.db.entity.FriendInvitation;
import kr.co.reverse.archive.db.entity.User;
import lombok.Data;

@Data
public class FriendInvitationRes {

    private String nickname;

    private String avatar;

    public static FriendInvitationRes of(User user) {
        if (user == null) return null;

        FriendInvitationRes friendInvitationRes = new FriendInvitationRes();

        friendInvitationRes.setNickname(user.getNickname());
        friendInvitationRes.setAvatar(user.getAvatar().toString());

        return friendInvitationRes;

    }

}
