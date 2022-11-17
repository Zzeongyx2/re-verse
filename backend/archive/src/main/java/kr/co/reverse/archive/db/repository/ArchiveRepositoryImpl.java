package kr.co.reverse.archive.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.reverse.archive.api.response.*;
import kr.co.reverse.archive.db.entity.*;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
public class ArchiveRepositoryImpl implements ArchiveRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public ArchiveDetailRes getArchiveDetail(UUID archiveId) {
        return jpaQueryFactory
                .select(
                        new QArchiveDetailRes(
                                QArchive.archive.id,
                                QArchive.archive.title,
                                QArchive.archive.description,
                                new QUserRes(
                                        QUser.user.id,
                                        QUser.user.nickname,
                                        QUser.user.message,
                                        QUser.user.avatar.stringValue()
                                )
                        )
                )
                .from(QArchive.archive)
                .leftJoin(QUser.user)
                .on(QUser.user.id.eq(QArchive.archive.id))
                .where(QArchive.archive.id.eq(archiveId))
                .fetchOne();
    }

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
                                        QUser.user.avatar.stringValue()
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
                                        QUser.user.avatar.stringValue()
                                ),
                                QArchive.archive.title,
                                QArchive.archive.description
                        )
                )
                .from(QArchiveMember.archiveMember)
                .join(QArchiveMember.archiveMember.archive, QArchive.archive)
                .leftJoin(QUser.user)
                .on(QArchive.archive.ownerId.eq(QUser.user.id))
                .where(
                        QArchiveMember.archiveMember.user.id.eq(userId), // 현재 user의 archive member 필터링
                        QArchive.archive.ownerId.ne(userId)) // 아카이브의 owner가 현재 user가 아닌 경우 필터링
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
                                QUser.user.avatar.stringValue()
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

    @Override
    public List<ArchiveRes> getBookmarkArchive(UUID userId) {
        return jpaQueryFactory
                .select(
                        new QArchiveRes(
                                QArchive.archive.id,
                                new QUserRes(
                                        QUser.user.id,
                                        QUser.user.nickname,
                                        QUser.user.message,
                                        QUser.user.avatar.stringValue()
                                ),
                                QArchive.archive.title,
                                QArchive.archive.description
                        )
                )
                .from(QBookMark.bookMark)
                .join(QBookMark.bookMark.archive, QArchive.archive)
                .leftJoin(QUser.user)
                .on(QArchive.archive.ownerId.eq(QUser.user.id)) // 아카이브의 owner가 현재 user가 아닌 경우 필터링
                .where(QBookMark.bookMark.user.id.eq(userId)) // 현재 user의 bookmark 필터링
                .fetch();
    }
}
