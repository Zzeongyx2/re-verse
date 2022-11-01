package kr.co.reverse.archive.db.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.reverse.archive.api.response.ArchiveRes;
import kr.co.reverse.archive.db.entity.*;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class ArchiveRepositoryImpl implements ArchiveRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<ArchiveRes> getFriendArchives(User user) {
        return jpaQueryFactory
                .select(Projections.bean(ArchiveRes.class,
                        QArchiveMember.archiveMember.archive.id,
                        QArchiveMember.archiveMember.archive.title,
                        QArchiveMember.archiveMember.archive.description))
                .from(QFriend.friend)
                .join(QFriend.friend.user, QUser.user).fetchJoin()
                .join(QArchiveMember.archiveMember.friend, QFriend.friend).fetchJoin()
                .where(QFriend.friend.user.id.eq(user.getId()))
                .fetch();
    }

}
