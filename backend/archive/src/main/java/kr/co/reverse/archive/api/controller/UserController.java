package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.ArchiveReq;
import kr.co.reverse.archive.api.request.SigninUserReq;
import kr.co.reverse.archive.api.request.UserReq;
import kr.co.reverse.archive.api.response.ArchiveRes;
import kr.co.reverse.archive.api.response.LoginUserRes;
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

        return ResponseEntity.ok(UserRes.of(user));
//        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @GetMapping("/{nickname}")
    public ResponseEntity checkDuplicateNickname(@PathVariable(name = "nickname") String nickname) {

        userService.checkDuplicateNickname(nickname);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @PatchMapping
    public ResponseEntity updateUser(@RequestBody UserReq userInfo){

        String userId = userService.getUserId();

        userService.updateUser(userId, userInfo);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();

    }


    @PostMapping("/create")
    public ResponseEntity createUser(@RequestBody SigninUserReq userInfo){
        userService.createUser(userInfo);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/id/{auth_id}")
    public ResponseEntity<LoginUserRes> loginUser(@PathVariable(name = "auth_id") String authId){

        String userId = userService.getUserIdByAuthId(authId);

        return ResponseEntity.ok(LoginUserRes.of(userId));
    }


}
