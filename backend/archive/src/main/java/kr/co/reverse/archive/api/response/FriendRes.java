package kr.co.reverse.archive.api.response;

import kr.co.reverse.archive.db.entity.Friend;
import kr.co.reverse.archive.db.entity.User;
import kr.co.reverse.archive.db.repository.FriendRepositoryCustom;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Data
public class FriendRes {

    private UUID friendUserId;

    private String nickname;

    private String avatar;

    private String message;

    public static FriendRes of(User friend){
        if(friend == null) return null;

        FriendRes friendRes = new FriendRes();

        friendRes.setFriendUserId(friend.getId());
        friendRes.setNickname(friend.getNickname());
        friendRes.setAvatar(friend.getAvatar().toString());
        friendRes.setMessage(friend.getMessage());

        return friendRes;
    }

}
