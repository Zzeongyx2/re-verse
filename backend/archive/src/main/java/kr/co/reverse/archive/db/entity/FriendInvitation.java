package kr.co.reverse.archive.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
public class FriendInvitation {

    @Id
    @GeneratedValue
    @Column(name = "friend_invitation_id")
    private Integer id;

    @OneToOne
    @JoinColumn(referencedColumnName = "user_id", name = "invitation_user_id")
    private User invitationUser;      // 나

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "user_id", name = "invitation_target_id")
    private User invitationTarget;    // 너

    private LocalDate createdTime;

    public FriendInvitation(User invitationUser, User invitationTarget){
        this.invitationUser = invitationUser;
        this.invitationTarget = invitationTarget;
        this.createdTime = LocalDate.now();
    }

}
