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

        if(isAccepted){
            friendRepository.save(new Friend(user, target));
            friendRepository.save(new Friend(target, user));
        }

        FriendInvitation friendInvitation = friendInvitationRepository.findFriendInvitationByInvitationUserAndInvitationTarget(user, target);
        friendInvitationRepository.delete(friendInvitation);
    }

    @Transactional
    public void createFriend(User user, User target){
        friendRepository.save(new Friend(user, target));
        friendRepository.save(new Friend(target, user));
    }

    public void deleteFriendInvitation(User user, User target) {

        friendInvitationRepository.delete(new FriendInvitation(user, target));

    }

    @Transactional
    public void deleteFriend(User user, User target) {

        Friend friend = friendRepository.findFriendByUserAndTarget(user, target);
        friendRepository.delete(friend);
    }

    public void createBookmark(Archive archive, User user) {

        bookmarkRepository.save(new BookMark(archive, user));

    }

    @Transactional
    public void deleteBookmark(Archive archive, User user) {

        BookMark bookMark = bookmarkRepository.findBookMarkByArchiveAndUser(archive, user);
        bookmarkRepository.delete(bookMark);
    }

    public void createArchiveMember(Archive archive, User user, Role role) {

        archiveMemberRepository.save(new ArchiveMember(archive,user, role));
    }

    @Transactional
    public void deleteArchiveMember(Archive archive, User user){
        ArchiveMember archiveMember = archiveMemberRepository.findArchiveMemberByArchiveAndUser(archive, user);
        // delete
    }

    public boolean checkFriend(User user, User target) {

        Friend friend = friendRepository.findFriendByUserAndTarget(user, target);
        return friend == null;
    }

}
