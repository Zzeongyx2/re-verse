package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.Paper;
import kr.co.reverse.archive.db.entity.Stuff;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PaperRepository extends JpaRepository<Paper, UUID> {

    List<Paper> findAllByStuffOrderByMemoryTimeAscCreatedTimeDesc(Stuff stuff);

}
