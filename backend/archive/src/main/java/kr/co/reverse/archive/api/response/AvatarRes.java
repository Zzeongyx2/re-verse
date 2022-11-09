package kr.co.reverse.archive.api.response;

import kr.co.reverse.archive.db.entity.Avatar;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class AvatarRes {

    private List<String> avatars = new ArrayList<>();

    public static AvatarRes of(List<String> avatars) {
        AvatarRes res = new AvatarRes();

        res.setAvatars(avatars);

        return res;
    }

}
