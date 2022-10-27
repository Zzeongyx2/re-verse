package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "friend_id")
    private String id;

    @OneToOne
    private User user;      // 나
    @OneToOne
    private User target;    // 너


    @Builder
    public Friend(User user, User target){
        // 랜덤 unique 한 난수값을 생성해야 한다.

        this.user = user;
        this.target = target;

    }

}
