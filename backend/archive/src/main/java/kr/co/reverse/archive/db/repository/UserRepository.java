package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Map;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    public User findByNickname(String nickname);

    public User findUserByAuthId(String authId);
}
