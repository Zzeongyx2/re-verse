package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.ArchiveMember;
import kr.co.reverse.archive.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ArchiveMemberRepository extends JpaRepository<ArchiveMember, UUID>, ArchiveMemberRepositoryCustom {

    public ArchiveMember findArchiveMemberByArchiveAndUser(Archive archive, User user);


}
