package kr.co.reverse.archive.api.response;

import kr.co.reverse.archive.db.entity.Friend;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Data
public class FriendsRes {

    private List<FriendRes> friendList = new ArrayList<>();

    public static FriendsRes of(List<FriendRes> friends){
        if(friends == null){
            return null;
        }

        FriendsRes friendsRes = new FriendsRes();
        friendsRes.friendList = friends;

        return friendsRes;
    }

}
