package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.db.entity.BookMark;
import kr.co.reverse.archive.db.entity.User;

import java.util.List;

public interface BookmarkRepositoryCustom {

    public List<BookMark> bookmarkList(User user, User target);
}
