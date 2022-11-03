package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.ArchiveMemberReq;
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
import kr.co.reverse.archive.common.exception.NotFriendException;
import kr.co.reverse.archive.db.entity.*;
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

    private final UserRepository userRepository;


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

        User test = userRepository.findByNickname("test");


        UUID userId = null;
        User user = null;
//        Archive archive = null;
//        User user = userService.getUser(userId);
        Archive archive = archiveService.getArchive(bookmarkReq.getArchiveId());


        friendService.createBookmark(archive, test);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/bookmark/{archive_id}")
    public ResponseEntity deleteBookmark(@PathVariable(name = "archive_id") UUID archiveId){

        UUID userId = null;
        User user = null;
//        User user = userService.getUser(userId);
        Archive archive = archiveService.getArchive(archiveId);

        friendService.deleteBookmark(archive, user);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("/archive-member")
    public ResponseEntity createArchiveMember(@RequestBody ArchiveMemberReq archiveMemberReq){

        UUID userId = null;
        User user = null;
//        User user = userService.getUser(userId);

        Archive archive = archiveService.getArchive(archiveMemberReq.getArchiveId());
        User target = null;
//        User target = userService.findByNickname(archiveMemberReq.getNickname());
        if(friendService.checkFriend(user, target)) {
            throw new NotFriendException();
        }
        friendService.createArchiveMember(archive, target, archiveMemberReq.getRole());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/archive-member/{archive_id}")
    public ResponseEntity deleteArchiveMember(@PathVariable(name = "archive_id") UUID archiveId, @RequestParam(name = "nickname") String nickname){

        User user = null;
//        User user = userService.getUser(userId);

        Archive archive = archiveService.getArchive(archiveId);
        User target = null;
//        User target = userService.findByNickname(nickname);

        if(friendService.checkFriend(user, target)) {
            throw new NotFriendException();
        }
        friendService.deleteArchiveMember(archive, target);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
