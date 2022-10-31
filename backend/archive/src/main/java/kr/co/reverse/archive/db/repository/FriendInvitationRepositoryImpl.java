package kr.co.reverse.archive.db.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.reverse.archive.api.response.FriendInvitationRes;
import kr.co.reverse.archive.db.entity.QFriendInvitation;
import kr.co.reverse.archive.db.entity.QUser;
import kr.co.reverse.archive.db.entity.User;

import javax.persistence.EntityManager;
import java.util.List;

public class FriendInvitationRepositoryImpl implements FriendInvitationRepositoryCustom{

    private final JPAQueryFactory jpaQueryFactory;

    public FriendInvitationRepositoryImpl(EntityManager em){
        jpaQueryFactory = new JPAQueryFactory(em);
    }


    @Override
    public List<FriendInvitationRes> waitingTo(User user) {

        return jpaQueryFactory
                .select(Projections.bean(FriendInvitationRes.class,
                        QFriendInvitation.friendInvitation.invitationTarget.nickname,
                        QFriendInvitation.friendInvitation.invitationTarget.avatar))
                .from(QFriendInvitation.friendInvitation)
                .join(QFriendInvitation.friendInvitation.invitationUser, QUser.user).fetchJoin()
                .where(
                        QFriendInvitation.friendInvitation.invitationUser.id.eq(user.getId())
                ).fetch();
    }

    @Override
    public List<FriendInvitationRes> waitingFrom(User user) {

        return jpaQueryFactory
                .select(Projections.bean(FriendInvitationRes.class,
                        QFriendInvitation.friendInvitation.invitationUser.nickname,
                        QFriendInvitation.friendInvitation.invitationUser.avatar))
                .from(QFriendInvitation.friendInvitation)
                .join(QFriendInvitation.friendInvitation.invitationTarget, QUser.user).fetchJoin()
                .where(
                        QFriendInvitation.friendInvitation.invitationTarget.id.eq(user.getId())
                ).fetch();
    }
}
