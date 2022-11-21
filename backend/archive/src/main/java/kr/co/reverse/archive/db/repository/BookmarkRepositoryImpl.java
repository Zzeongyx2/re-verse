package kr.co.reverse.archive.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.reverse.archive.db.entity.BookMark;
import kr.co.reverse.archive.db.entity.QArchive;
import kr.co.reverse.archive.db.entity.QBookMark;
import kr.co.reverse.archive.db.entity.User;

import javax.persistence.EntityManager;
import java.util.List;

public class BookmarkRepositoryImpl implements BookmarkRepositoryCustom{

    private final JPAQueryFactory jpaQueryFactory;

    public BookmarkRepositoryImpl(EntityManager em) {
        jpaQueryFactory = new JPAQueryFactory(em);
    }


    @Override
    public List<BookMark> bookmarkList(User user, User target) {
        return jpaQueryFactory
                .select(QBookMark.bookMark)
                .from(QBookMark.bookMark)
                .join(QBookMark.bookMark.archive, QArchive.archive)
                .where(
                        QBookMark.bookMark.archive.ownerId.eq(user.getId())
                                .and(QBookMark.bookMark.user.eq(target))
                ).fetch();
    }
}
