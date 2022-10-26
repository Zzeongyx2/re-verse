package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.Archive;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArchiveRepository extends JpaRepository<Archive, Integer> {
    
}
