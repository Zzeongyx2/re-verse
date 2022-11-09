package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.BookMark;
import kr.co.reverse.archive.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BookmarkRepository extends JpaRepository<BookMark, Integer>, BookmarkRepositoryCustom {

    public BookMark findBookMarkByArchiveAndUser(Archive archive, User user);
}
