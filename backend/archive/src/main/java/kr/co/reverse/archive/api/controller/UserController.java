package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.AvatarReq;
import kr.co.reverse.archive.api.request.SigninUserReq;
import kr.co.reverse.archive.api.request.UserReq;
import kr.co.reverse.archive.api.response.UserIdRes;
import kr.co.reverse.archive.api.response.UserRes;
import kr.co.reverse.archive.api.service.UserService;
import kr.co.reverse.archive.db.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping
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

        String authId = userService.getUserIdByUserId(userId);

        return ResponseEntity.ok(UserIdRes.of(authId));
    }

}
