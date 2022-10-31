package kr.co.reverse.auth.db.repository;

import kr.co.reverse.auth.db.entity.Auth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthRepository extends JpaRepository<Auth, String> {

    boolean existsByEmail(String email);

    Optional<Auth> findByEmail(String email);
}
