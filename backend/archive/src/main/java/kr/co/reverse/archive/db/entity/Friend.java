package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor
public class Friend {

    @Id
    @GeneratedValue
    @Column(name = "friend_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "user_id", name = "user_id")
    private User user;      // 나
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "user_id", name = "target_id")
    private User target;    // 너


    @Builder
    public Friend(User user, User target){
        // 랜덤 unique 한 난수값을 생성해야 한다.
        this.user = user;
        this.target = target;

    }

}
