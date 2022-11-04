package kr.co.reverse.auth.db.repository;

import kr.co.reverse.auth.db.entity.Auth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface AuthRepository extends JpaRepository<Auth, UUID> {

    boolean existsByEmail(String email);

    Optional<Auth> findByEmail(String email);
}
