package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

    public User findByNickname(String nickname);

}
