package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.api.response.FriendInvitationRes;
import kr.co.reverse.archive.db.entity.User;

import java.util.List;

public interface FriendInvitationRepositoryCustom {

    public List<FriendInvitationRes> waitingTo(User user);

    public List<FriendInvitationRes> waitingFrom(User user);

}
