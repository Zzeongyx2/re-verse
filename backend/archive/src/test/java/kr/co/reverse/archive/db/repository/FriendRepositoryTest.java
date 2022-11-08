package kr.co.reverse.archive.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.reverse.archive.api.response.FriendInvitationRes;
import kr.co.reverse.archive.api.response.FriendRes;
import kr.co.reverse.archive.db.entity.Friend;
import kr.co.reverse.archive.db.entity.FriendInvitation;
import kr.co.reverse.archive.db.entity.QUser;
import kr.co.reverse.archive.db.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FriendRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FriendRepository friendRepository;

    @Autowired
    private FriendInvitationRepository friendInvitationRepository;

    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    @Test
    public void findFriends(){
//        User user1 = User.builder().nickname("a").message("hello").build();
//        User user2 = User.builder().nickname("b").message("asdf").build();

//        userRepository.save(user1);
//        userRepository.save(user2);
//
//        Friend friend1 = Friend.builder().user(user1).target(user2).build();
//        Friend friend2 = Friend.builder().user(user2).target(user1).build();
//
//        friendRepository.save(friend1);
//        friendRepository.save(friend2);
        User user1 = userRepository.findByNickname("a");
        User user2 = userRepository.findByNickname("b");

        friendInvitationRepository.save(new FriendInvitation(user2, user1));
        List<FriendInvitationRes> friendInvitationResList = friendInvitationRepository.waitingTo(user1);
        for(FriendInvitationRes friendInvitationRes : friendInvitationResList){
            System.out.println("-----------------------");
            System.out.println(friendInvitationRes.getNickname());
            System.out.println(friendInvitationRes.getMessage());
            System.out.println("-----------------------");

        }


    }

    @Test
    public void search(){
        User user1 = jpaQueryFactory
                .selectFrom(QUser.user)
                .where(QUser.user.nickname.eq("a"))
                .fetchOne();

        assertEquals("a", user1.getNickname());

    }

    @Test
    public void test(){


        User user = userRepository.findByNickname("a");
        List<FriendRes> list = friendRepository.list(user);

        for(FriendRes friendRes : list){
            System.out.println(friendRes.getNickname());
        }
        assertEquals(list.size(), 1);

    }

}