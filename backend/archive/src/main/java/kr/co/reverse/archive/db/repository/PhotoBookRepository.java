package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.PhotoBook;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PhotoBookRepository extends JpaRepository<PhotoBook, UUID> {
}
