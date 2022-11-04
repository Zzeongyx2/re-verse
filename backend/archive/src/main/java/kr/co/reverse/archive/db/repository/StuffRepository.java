package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.Stuff;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface StuffRepository extends JpaRepository<Stuff, UUID>, StuffRepositoryCustom {

}
