package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.AvatarReq;
import kr.co.reverse.archive.api.request.SigninUserReq;
import kr.co.reverse.archive.api.request.UserReq;
import kr.co.reverse.archive.api.response.*;
import kr.co.reverse.archive.api.service.UserService;
import kr.co.reverse.archive.db.entity.Avatar;
import kr.co.reverse.archive.db.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<? extends UserRes> getPlayer() {

        String userId = userService.getUserId();

        User user = userService.getPlayer(userId);

        return ResponseEntity.ok(UserRes.builder()
                .nickname(user.getNickname())
                .message(user.getMessage())
                .avatar(user.getAvatar().toString())
                .build());
    }

    @GetMapping("/compare")
    public ResponseEntity checkDuplicateNickname(@RequestParam String nickname) {

        userService.checkDuplicateNickname(nickname);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @PatchMapping
    public ResponseEntity updateUser(@RequestBody UserReq userInfo){

        String userId = userService.getUserId();

        userService.updateUser(userId, userInfo);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();

    }

    @PatchMapping("/avatar")
    public ResponseEntity updateAvatar(@RequestBody AvatarReq avatarInfo){

        String userId = userService.getUserId();

        userService.changeAvatar(userId, avatarInfo);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @GetMapping("/avatar")
    public ResponseEntity<? extends AvatarRes> getAvatarList(){

        List<String> avatars = userService.getAvatars();

        return ResponseEntity.ok(AvatarRes.of(avatars));
    }

    @GetMapping("/search")
    public ResponseEntity<? extends UsersRes> searchUsers(@RequestParam String nickname){

        List<User> users = userService.getUsers(nickname);

        return ResponseEntity.ok(UsersRes.of(users));
    }


    //auth server 통신
    @PostMapping("/create")
    public ResponseEntity createUser(@RequestBody SigninUserReq userInfo){
        userService.createUser(userInfo);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/uid/{auth_id}")
    public ResponseEntity<UserIdRes> getUserId(@PathVariable(name = "auth_id") String authId){

        String userId = userService.getUserIdByAuthId(authId);

        return ResponseEntity.ok(UserIdRes.of(userId));
    }

    @GetMapping("/aid/{user_id}")
    public ResponseEntity<UserIdRes> getAuthId(@PathVariable(name = "user_id") String userId){

        String authId = userService.getAuthIdByUserId(userId);

        return ResponseEntity.ok(UserIdRes.of(authId));
    }

}
