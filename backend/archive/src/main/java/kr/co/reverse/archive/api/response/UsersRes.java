package kr.co.reverse.archive.api.response;

import kr.co.reverse.archive.db.entity.User;
// import kr.co.reverse.archive.db.entity.UserDocument;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class UsersRes {

    List<UserRes> users = new ArrayList<>();

    public static UsersRes of(List<User> users) {
        UsersRes res = new UsersRes();

        List<UserRes> userResList = new ArrayList<>();
        for(User user : users){
            UserRes userRes = new UserRes();
            userRes.setMessage(user.getMessage());
            userRes.setNickname(user.getNickname());
            userRes.setAvatar(user.getAvatar().toString());

            userResList.add(userRes);
        }

        res.setUsers(userResList);

        return res;
    }

    public static UsersRes ofDocument(List<User> users) {
        UsersRes res = new UsersRes();

        List<UserRes> userResList = new ArrayList<>();
        for(User user : users){
            UserRes userRes = new UserRes();
            userRes.setUserId(user.getId());
            userRes.setMessage(user.getMessage());
            userRes.setNickname(user.getNickname());
            userRes.setAvatar(user.getAvatar().toString());

            userResList.add(userRes);
        }

        res.setUsers(userResList);

        return res;
    }
}
