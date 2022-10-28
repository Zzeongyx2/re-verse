package kr.co.reverse.archive.db.entity;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Getter
@Entity
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private UUID id;

    private String nickname;
}
