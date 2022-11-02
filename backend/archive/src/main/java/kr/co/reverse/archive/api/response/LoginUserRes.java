package kr.co.reverse.archive.api.response;

import kr.co.reverse.archive.db.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginUserRes {
    private String userId;

    public static LoginUserRes of(String userId) {
        LoginUserRes res = new LoginUserRes();

        res.setUserId(userId);

        return res;
    }
}
