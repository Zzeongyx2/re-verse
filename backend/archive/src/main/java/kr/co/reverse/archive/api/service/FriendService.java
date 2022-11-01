package kr.co.reverse.archive.api.service;

import kr.co.reverse.archive.api.request.FriendInvitationReq;
import kr.co.reverse.archive.api.request.InvitationReplyReq;
import kr.co.reverse.archive.api.response.FriendInvitationRes;
import kr.co.reverse.archive.api.response.FriendRes;
import kr.co.reverse.archive.db.entity.Friend;
import kr.co.reverse.archive.db.entity.FriendInvitation;
import kr.co.reverse.archive.db.entity.User;
import kr.co.reverse.archive.db.repository.FriendInvitationRepository;
import kr.co.reverse.archive.db.repository.FriendRepository;
import kr.co.reverse.archive.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FriendService {

    private final FriendRepository friendRepository;

    private final FriendInvitationRepository friendInvitationRepository;


    public List<FriendRes> getFriends(User user) {

        return friendRepository.list(user);
    }

    @Transactional
    public void createFriendInvitation(User user, User target) {

        friendInvitationRepository.save(new FriendInvitation(user, target));
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
        }

        FriendInvitation friendInvitation = friendInvitationRepository.findByInvitationUserAndInvitationTarget(user, target);
        friendInvitationRepository.delete(friendInvitation);
    }

    @Transactional
    public void deleteFriend(User user, User target) {

        Friend friend = friendRepository.findByUserAndTarget(user, target);
        friendRepository.delete(friend);
    }
}
