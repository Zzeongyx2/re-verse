package kr.co.reverse.archive.api.service;

import kr.co.reverse.archive.api.response.FriendInvitationRes;
import kr.co.reverse.archive.api.response.FriendRes;
import kr.co.reverse.archive.db.entity.*;
import kr.co.reverse.archive.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FriendService {

    private final FriendRepository friendRepository;

    private final FriendInvitationRepository friendInvitationRepository;

    private final BookmarkRepository bookmarkRepository;

    private final ArchiveMemberRepository archiveMemberRepository;


    public List<FriendRes> getFriends(User user) {

        return friendRepository.list(user);
    }

    @Transactional
    public void createFriendInvitation(User user, User target) {

        friendInvitationRepository.save(new FriendInvitation(user, target));
    }

    public FriendInvitation getFriendInvitationTo(User user, User target) {

        return friendInvitationRepository.findFriendInvitationByInvitationUserAndInvitationTarget(user, target);

    }

    public List<FriendInvitationRes> getFriendInvitationsTo(User user) {
        return friendInvitationRepository.waitingTo(user);
    }

    public List<FriendInvitationRes> getFriendInvitationsFrom(User user) {
        return friendInvitationRepository.waitingFrom(user);
    }

    @Transactional
    public void reply(User user, User target, Boolean isAccepted) {

        if (friendRepository.findFriendByUserAndTarget(user, target) != null) {
            return;
        }

        if (isAccepted) {
            friendRepository.save(new Friend(user, target));
            friendRepository.save(new Friend(target, user));
        }

        FriendInvitation friendInvitation = friendInvitationRepository.findFriendInvitationByInvitationUserAndInvitationTarget(target, user);
        if(friendInvitation != null){
            friendInvitationRepository.delete(friendInvitation);
        }
        FriendInvitation friendInvitation1 = friendInvitationRepository.findFriendInvitationByInvitationUserAndInvitationTarget(user, target);
        if(friendInvitation1 != null){
            friendInvitationRepository.delete(friendInvitation1);
        }
    }

    @Transactional
    public void createFriend(User user, User target) {
        friendRepository.save(new Friend(user, target));
        friendRepository.save(new Friend(target, user));
    }

    public void deleteFriendInvitation(User user, User target) {

        friendInvitationRepository.delete(new FriendInvitation(user, target));

    }

    @Transactional
    public void deleteFriend(User user, User target) {

        Friend friend1 = friendRepository.findFriendByUserAndTarget(user, target);
        Friend friend2 = friendRepository.findFriendByUserAndTarget(target, user);
        friendRepository.delete(friend1);
        friendRepository.delete(friend2);

        // user와 친구의 아카이브 멤버도 모두 삭제할것
        List<ArchiveMember> archiveMembers1 = archiveMemberRepository.archiveMemberList(user, target);
        List<ArchiveMember> archiveMembers2 = archiveMemberRepository.archiveMemberList(user, target);
        archiveMemberRepository.deleteAll(archiveMembers1);
        archiveMemberRepository.deleteAll(archiveMembers2);

        // bookmark 도 체크해서 지우기
        List<BookMark> bookMarks1 = bookmarkRepository.bookmarkList(user, target);
        List<BookMark> bookMarks2 = bookmarkRepository.bookmarkList(target, user);
        bookmarkRepository.deleteAll(bookMarks1);
        bookmarkRepository.deleteAll(bookMarks2);

    }

    public void createBookmark(Archive archive, User user) {

        BookMark bookMark = BookMark.builder()
                .archive(archive)
                .user(user)
                .build();

        bookmarkRepository.save(bookMark);

    }

    @Transactional
    public void deleteBookmark(Archive archive, User user) {

        BookMark bookMark = bookmarkRepository.findBookMarkByArchiveAndUser(archive, user);
        bookmarkRepository.delete(bookMark);
    }

    public void createArchiveMember(Archive archive, User user, Role role) {

        archiveMemberRepository.save(new ArchiveMember(archive, user, role));
    }

    public Boolean checkArchiveMember(Archive archive, User user) {
        return archiveMemberRepository.findArchiveMemberByArchiveAndUser(archive, user) != null;
    }

    @Transactional
    public void deleteArchiveMember(Archive archive, User user) {
        ArchiveMember archiveMember = archiveMemberRepository.findArchiveMemberByArchiveAndUser(archive, user);
        archiveMemberRepository.delete(archiveMember);
    }

    public boolean checkFriend(User user, User target) {

        Friend friend = friendRepository.findFriendByUserAndTarget(user, target);
        return friend == null;

    }

}
