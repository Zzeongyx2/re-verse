package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArchiveRepository extends JpaRepository<Archive, Integer> {

//    List<Archive> findAllByUser(User user);

}
