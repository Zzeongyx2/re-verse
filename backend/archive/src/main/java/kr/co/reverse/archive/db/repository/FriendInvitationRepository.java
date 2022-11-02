package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.FriendInvitation;
import kr.co.reverse.archive.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FriendInvitationRepository extends JpaRepository<FriendInvitation, Integer>, FriendInvitationRepositoryCustom {

    public FriendInvitation findFriendInvitationByInvitationUserAndInvitationTarget(User user, User target);

}
