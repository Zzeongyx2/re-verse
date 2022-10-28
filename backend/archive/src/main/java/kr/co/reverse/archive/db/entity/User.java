package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private UUID id;

    @Column(name = "auth_id")
    private String authId; // msa를 위해 jpa 객체로 가지고 있는 것이 아닌 auth_id 값을 가지고 Auth 서비스와 통신

    private String nickname;

    private String message;

    private Integer avatar;

    private LocalDate createdTime;

    @OneToMany
    private  List<Archive> myArchives;

    @OneToMany
    private List<Archive> friendArchives;

    @OneToMany(mappedBy = "target")
    private List<Friend> myFriends = new ArrayList<>();

    @OneToMany(mappedBy = "invitationTarget")
    private List<FriendInvitation> myInvitations = new ArrayList<>();

    @Builder
    public User(String nickname, String message, Integer avatar, LocalDate createdTime){
        this.nickname = nickname;
        this.message = message;
        this.avatar = avatar;
        this.createdTime = createdTime;
    }

}
