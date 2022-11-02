package kr.co.reverse.archive.api.response;

import kr.co.reverse.archive.db.entity.User;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserRes {


    private String nickname;
    private int avatar;
    private String message;


    public static UserRes of(User user) {
        if(user == null) {
            return null;
        }

        UserRes res = new UserRes();

        res.setNickname(user.getNickname());
        res.setAvatar(user.getAvatar());
        res.setMessage(user.getMessage());

        return res;
    }
}
