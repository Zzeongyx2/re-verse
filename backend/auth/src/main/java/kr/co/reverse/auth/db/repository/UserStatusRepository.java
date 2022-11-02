package kr.co.reverse.auth.db.repository;

import kr.co.reverse.auth.db.entity.UserStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserStatusRepository extends JpaRepository<UserStatus, Long> {
}
