package kr.co.reverse.archive.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.reverse.archive.api.response.FriendRes;
import kr.co.reverse.archive.db.entity.Friend;
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
    private JPAQueryFactory jpaQueryFactory;

    @Test
    public void findFriends(){
        User user1 = User.builder().nickname("a").message("hello").build();
        User user2 = User.builder().nickname("b").message("asdf").build();

        userRepository.save(user1);
        userRepository.save(user2);

        Friend friend1 = Friend.builder().user(user1).target(user2).build();
        Friend friend2 = Friend.builder().user(user2).target(user1).build();

        friendRepository.save(friend1);
        friendRepository.save(friend2);

        List<Friend> list = friendRepository.findAll();
        for(Friend friend : list){
            System.out.println(friend.getId()+" "+friend.getUser()+" "+friend.getTarget());
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

        assertEquals(list.size(), 1);

    }

}