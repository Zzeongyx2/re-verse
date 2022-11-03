package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.BookmarkReq;
import kr.co.reverse.archive.api.request.FriendInvitationReq;
import kr.co.reverse.archive.api.request.InvitationReplyReq;
import kr.co.reverse.archive.api.response.FriendInvitationRes;
import kr.co.reverse.archive.api.response.FriendInvitationsRes;
import kr.co.reverse.archive.api.response.FriendRes;
import kr.co.reverse.archive.api.response.FriendsRes;
import kr.co.reverse.archive.api.service.ArchiveService;
import kr.co.reverse.archive.api.service.FriendService;
import kr.co.reverse.archive.api.service.UserService;
import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.Friend;
import kr.co.reverse.archive.db.entity.FriendInvitation;
import kr.co.reverse.archive.db.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/friend")
@RequiredArgsConstructor
public class FriendController {

    private final FriendService friendService;

    private final UserService userService;

    private final ArchiveService archiveService;

    @GetMapping
    public ResponseEntity<? extends FriendsRes> getFriends(){

        // TODO: redis에서 access token을 가져와서 userId를 파싱하여 파라미터로 넘겨준다.
        UUID userId = null;
        User user = null;
//        User user = userService.getUser(userId);

        List<FriendRes> myFriends = friendService.getFriends(user);
        return ResponseEntity.ok(FriendsRes.of(myFriends));

    }

    @PostMapping
    public ResponseEntity createFriendInvitation(@RequestBody FriendInvitationReq friendInvitationReq){

        UUID userId = null;
        User user = null;
        User target = null;
//        User user = userService.getUser(userId);
//        User target = userService.getUserByNickname(friendInvitationReq.getNickname());

        friendService.createFriendInvitation(user, target);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/reply")
    public ResponseEntity<? extends FriendInvitationsRes> getFriendInvitations(){

        UUID userId = null;
        User user = null;
//        User user = userService.getUser(userid);

        List<FriendInvitationRes> waitingTo = friendService.getFriendInvitationsTo(user);
        List<FriendInvitationRes> waitingFrom = friendService.getFriendInvitationsFrom(user);

        return ResponseEntity.ok(FriendInvitationsRes.of(waitingTo, waitingFrom));
    }

    @PostMapping("/reply")
    public ResponseEntity reply (@RequestBody InvitationReplyReq invitationReplyReq){

        UUID userId = null;
        User user = null;
        User target = null;
//        User user = userService.getUser(userId);
//        User target = userService.getUser(invitationReplyReq.getNickname());
        Boolean isAccepted = invitationReplyReq.getIsAccepted();

        friendService.reply(user, target, isAccepted);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping
    public ResponseEntity delete (@RequestParam(name = "nickname") String nickname){

        UUID userId = null;
        User user = null;
        User target = null;
//        User user = userService.getUser(userId);
//        User target = userService.getUser(invitationReplyReq.getNickname());

        friendService.deleteFriend(user, target);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("/bookmark")
    public ResponseEntity createBookmark(@RequestBody BookmarkReq bookmarkReq){

        UUID userId = null;
        User user = null;
        Archive archive = null;
//        User user = userService.getUser(userId);
//        Archive archive = archiveService.getArchive(bookmarkReq.getArchiveId());


        friendService.createBookmark(archive, user);

        return ResponseEntity.status(HttpStatus.OK).build();

    }

    @DeleteMapping("/bookmark/{archive_id}")
    public ResponseEntity deleteBookmark(@PathVariable UUID archive_id){

        UUID userId = null;
        User user = null;
//        User user = userService.getUser(userId);
        Archive archive = archiveService.getArchive(archive_id);

        friendService.deleteBookmark(archive, user);

        return ResponseEntity.status(HttpStatus.OK).build();

    }

}
