package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private String id;

    private String nickname;

    private String message;

    private Integer avatar;

    private LocalDate createdTime;

    @OneToMany
    private  List<Archive> myArchives;

    @OneToMany
    private List<Archive> friendArchives;

    @Builder
    public User(String nickname, String message, Integer avatar, LocalDate createdTime){
        this.nickname = nickname;
        this.message = message;
        this.avatar = avatar;
        this.createdTime = createdTime;
    }


}
