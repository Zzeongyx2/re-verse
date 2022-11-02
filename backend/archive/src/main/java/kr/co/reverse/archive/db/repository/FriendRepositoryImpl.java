package kr.co.reverse.archive.db.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.reverse.archive.api.response.FriendRes;
import kr.co.reverse.archive.db.entity.QFriend;
import kr.co.reverse.archive.db.entity.QUser;
import kr.co.reverse.archive.db.entity.User;

import javax.persistence.EntityManager;
import java.util.List;

public class FriendRepositoryImpl implements FriendRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    public FriendRepositoryImpl(EntityManager em){
        this.jpaQueryFactory = new JPAQueryFactory(em);
    }


    @Override
    public List<FriendRes> list(User user) {
        return jpaQueryFactory
                .select(Projections.bean(FriendRes.class,
                        QFriend.friend.target.id,
                        QFriend.friend.target.nickname,
                        QFriend.friend.target.avatar,
                        QFriend.friend.target.message))
                .from(QFriend.friend)
//                .join(QFriend.friend.user, QUser.user).fetchJoin()
                .where(
                      QFriend.friend.user.id.eq(user.getId())
                )
                .fetch();
    }
}
