package kr.co.reverse.archive.api.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserIdRes {
    private String id;

    public static UserIdRes of(String id) {
        UserIdRes res = new UserIdRes();

        res.setId(id);

        return res;
    }
}
