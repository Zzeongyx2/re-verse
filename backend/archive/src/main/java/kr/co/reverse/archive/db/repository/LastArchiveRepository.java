package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.LastArchive;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LastArchiveRepository extends JpaRepository<LastArchive, Integer> {
}
