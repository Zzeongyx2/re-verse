package kr.co.reverse.archive.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.reverse.archive.db.entity.ArchiveMember;
import kr.co.reverse.archive.db.entity.QArchive;
import kr.co.reverse.archive.db.entity.QArchiveMember;
import kr.co.reverse.archive.db.entity.User;

import javax.persistence.EntityManager;
import java.util.List;

public class ArchiveMemberRepositoryImpl implements ArchiveMemberRepositoryCustom{

    private final JPAQueryFactory jpaQueryFactory;

    public ArchiveMemberRepositoryImpl(EntityManager em){
        jpaQueryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<ArchiveMember> archiveMemberList(User user, User target) {
        return jpaQueryFactory
                .select(
                        QArchiveMember.archiveMember
                )
                .from(QArchiveMember.archiveMember)
                .join(QArchiveMember.archiveMember.archive, QArchive.archive)
                .where(
                        QArchiveMember.archiveMember.archive.ownerId.eq(user.getId())
                                .and(QArchiveMember.archiveMember.user.eq(target))
                ).fetch();
    }
}
