package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.Friend;
import kr.co.reverse.archive.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FriendRepository extends JpaRepository<Friend, Integer>, FriendRepositoryCustom{

    public List<Friend> findAllByUser(User user);

    public Friend findByUserAndTarget(User user, User target);

}
