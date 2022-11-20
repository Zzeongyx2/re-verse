package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.*;
import kr.co.reverse.archive.api.response.*;
import kr.co.reverse.archive.api.service.ArchiveService;
// import kr.co.reverse.archive.api.service.UserSearchService;
import kr.co.reverse.archive.api.service.PhotoBookService;
import kr.co.reverse.archive.api.service.StuffService;
import kr.co.reverse.archive.api.service.UserService;
import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.Avatar;
import kr.co.reverse.archive.db.entity.StuffType;
import kr.co.reverse.archive.db.entity.User;
// import kr.co.reverse.archive.db.entity.UserDocument;
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

    private final ArchiveService archiveService;
    // private final UserSearchService userSearchService;

    private final PhotoBookService photoBookService;

    private final StuffService stuffService;

    @GetMapping
    public ResponseEntity<? extends UserDetailRes> getPlayer() {

        String userId = userService.getUserId();

        User user = userService.getPlayer(userId);

        return ResponseEntity.ok(UserDetailRes.builder()
                .nickname(user.getNickname())
                .message(user.getMessage())
                .avatar(user.getAvatar().toString())
                .bestArchiveId(user.getBestArchiveId())
                .build());
    }

    @GetMapping("/compare")
    public ResponseEntity checkDuplicateNickname(@RequestParam String nickname) {

        userService.checkDuplicateNickname(nickname);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @PatchMapping
    public ResponseEntity updateUser(@RequestBody UserReq userInfo) {

        String userId = userService.getUserId();

        userService.updateUser(userId, userInfo);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();

    }

    @PatchMapping("/avatar")
    public ResponseEntity updateAvatar(@RequestBody AvatarReq avatarInfo) {

        String userId = userService.getUserId();

        userService.changeAvatar(userId, avatarInfo);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @PatchMapping("/archive")
    public ResponseEntity updateBestArchive(@RequestBody BestArchiveReq bestArchiveReq) {
        String userId = userService.getUserId();

        userService.updateBestArchive(userId, bestArchiveReq.getArchiveId());

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @GetMapping("/avatar")
    public ResponseEntity<? extends AvatarRes> getAvatarList() {

        List<String> avatars = userService.getAvatars();

        return ResponseEntity.ok(AvatarRes.of(avatars));
    }

    @GetMapping("/search")
    public ResponseEntity<? extends UsersRes> searchUsers(@RequestParam String nickname) {

       List<User> users = userService.getUsers(nickname);
        // List<UserDocument> users = userSearchService.searchUser(nickname);

        return ResponseEntity.ok(UsersRes.ofDocument(users));
    }


    //auth server 통신
    @PostMapping("/create")
    public ResponseEntity createUser(@RequestBody SigninUserReq userInfo) {
        User user = userService.createUser(userInfo);

        if (user != null) {
            Archive archive = archiveService.createArchive(
                    ArchiveReq.of("나의 첫 아카이브", "친구와 나의 추억을 공유해보세요 :)"), user);
            userService.updateBestArchive(user.getId().toString(), archive.getId().toString());

            for (int i = 1; i <= 3; i++) { // PhotoBook 생성
                photoBookService.createPhotoBook(archive, i);
            }

            for (int i = 1; i <= 3; i++) { // 각 photobook 별 읽기 전용 / 쓰기 전용 stuff 생성
//            stuffService.createStuff(archive, StuffType.READ_ONLY);
                stuffService.createStuff(archive, StuffType.WRITE_ONLY);
            }
        }

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/uid/{auth_id}")
    public ResponseEntity<UserIdRes> getUserId(@PathVariable(name = "auth_id") String authId) {

        String userId = userService.getUserIdByAuthId(authId);

        return ResponseEntity.ok(UserIdRes.of(userId));
    }

    @GetMapping("/aid/{user_id}")
    public ResponseEntity<UserIdRes> getAuthId(@PathVariable(name = "user_id") String userId) {

        String authId = userService.getAuthIdByUserId(userId);

        return ResponseEntity.ok(UserIdRes.of(authId));
    }

//     @DeleteMapping("/delete/{auth_id}")
//     public void deleteUser(@PathVariable(name = "auth_id") String authId){


//         User user = userService.getUserByAuthId(authId);

//         userSearchService.deleteUser(user);

// //        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
//     }

}
