package kr.co.reverse.archive.db.repository;

import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.reverse.archive.api.response.FriendInvitationRes;
import kr.co.reverse.archive.api.response.QFriendInvitationRes;
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
                .select(
                        new QFriendInvitationRes(
                            QFriendInvitation.friendInvitation.invitationTarget.nickname,
//                            Expressions.asString(String.valueOf(QFriendInvitation.friendInvitation.invitationTarget.avatar)),
                            QFriendInvitation.friendInvitation.invitationTarget.avatar.stringValue(),
                            QFriendInvitation.friendInvitation.invitationTarget.message
                        )
                )
                .from(QFriendInvitation.friendInvitation)
                .join(QFriendInvitation.friendInvitation.invitationUser, QUser.user)
                .where(
                        QFriendInvitation.friendInvitation.invitationUser.id.eq(user.getId())
                ).fetch();
    }

    @Override
    public List<FriendInvitationRes> waitingFrom(User user) {

        return jpaQueryFactory
                .select(
                        new QFriendInvitationRes(
                            QFriendInvitation.friendInvitation.invitationUser.nickname,
//                            Expressions.asString(String.valueOf(QFriendInvitation.friendInvitation.invitationUser.avatar)),
                            QFriendInvitation.friendInvitation.invitationUser.avatar.stringValue(),
                            QFriendInvitation.friendInvitation.invitationUser.message
                        )
                )
                .from(QFriendInvitation.friendInvitation)
                .join(QFriendInvitation.friendInvitation.invitationTarget, QUser.user)
                .where(
                        QFriendInvitation.friendInvitation.invitationTarget.id.eq(user.getId())
                ).fetch();
    }
}
