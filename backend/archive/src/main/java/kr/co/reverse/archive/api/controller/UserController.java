package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.ArchiveReq;
import kr.co.reverse.archive.api.response.ArchiveRes;
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

    @PostMapping
    public ResponseEntity<? extends UserRes> getPlayer() {

        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);

        return ResponseEntity.ok(UserRes.of(user));
    }

    @GetMapping("/user/{nickname}")
    public ResponseEntity checkDuplicateNickname(@PathVariable(name = "nicknmame") String nickname) {

        userService.checkDuplicateNickname(nickname);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }




}
