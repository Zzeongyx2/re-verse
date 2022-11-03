package kr.co.reverse.archive.db.repository;

import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.reverse.archive.api.response.ArchiveRes;
import kr.co.reverse.archive.api.response.QArchiveRes;
import kr.co.reverse.archive.api.response.QUserRes;
import kr.co.reverse.archive.api.response.UserRes;
import kr.co.reverse.archive.db.entity.*;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
public class ArchiveRepositoryImpl implements ArchiveRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    /*
     * 나의 Archive 정보 리스트 가져오기
     * */
    @Override
    public List<ArchiveRes> getMyArchives(UUID userId) {
        return jpaQueryFactory
                .select(
                        new QArchiveRes(
                                QArchive.archive.id,
                                new QUserRes(
                                        QUser.user.id,
                                        QUser.user.nickname,
                                        QUser.user.message,
                                        QUser.user.avatar
                                ),
                                QArchive.archive.title,
                                QArchive.archive.description
                        )
                )
                .from(QArchive.archive)
                .leftJoin(QUser.user)
                .on(QArchive.archive.ownerId.eq(QUser.user.id))
                .where(QArchive.archive.ownerId.eq(userId))
                .fetch();
    }

    /*
     * 내가 멤버로 속한 Archive 정보 리스트 가져오기
     * */
    @Override
    public List<ArchiveRes> getFriendArchives(UUID userId) {
        return jpaQueryFactory
                .select(
                        new QArchiveRes(
                                QArchive.archive.id,
                                new QUserRes(
                                        QUser.user.id,
                                        QUser.user.nickname,
                                        QUser.user.message,
                                        QUser.user.avatar
                                ),
                                QArchive.archive.title,
                                QArchive.archive.description
                        )
                )
                .from(QArchive.archive)
                .leftJoin(QUser.user)
                .on(QArchive.archive.ownerId.eq(QUser.user.id))
                .where(QArchive.archive.ownerId.ne(userId))
                .fetch();
    }

    /*
     * Archive 의 Member 가져오기
     * */
    @Override
    public List<UserRes> getMembers(UUID archiveId) {
        return jpaQueryFactory
                .select(
                        new QUserRes(
                                QUser.user.id,
                                QUser.user.nickname,
                                QUser.user.message,
                                QUser.user.avatar
                        )
                )
                .from(QArchiveMember.archiveMember)
                .join(QArchiveMember.archiveMember.user, QUser.user)
                .where(QArchiveMember.archiveMember.archive.id.eq(archiveId))
                .fetch();
    }

    @Override
    public Boolean checkBookmark(UUID archiveId, UUID userId) {
        Integer bookmarkId = jpaQueryFactory
                .select(QBookMark.bookMark.id)
                .from(QBookMark.bookMark)
                .where(QBookMark.bookMark.archive.id.eq(archiveId)
                        .and(QBookMark.bookMark.user.id.eq(userId)))
                .fetchOne();

        return bookmarkId != null;
    }
}
