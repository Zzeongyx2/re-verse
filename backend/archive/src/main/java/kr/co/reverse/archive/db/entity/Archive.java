package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Archive {

    @Id
    @GeneratedValue
    @Column(name = "archive_id")
    private Integer id;

    private String title;

    private String description;

    private Boolean isDeleted;

    private Integer level;

    private LocalDateTime createdTime;

//    @OneToOne
//    private User user;

//    private List<Stuff> stuffs;

//    private List<User> members;

//    private List<PhotoBook> photoBooks;

//    private List<GuestBook> guestBooks;

    @Builder
    public Archive(String title, String description, Boolean isDeleted, Integer level, LocalDateTime createdTime) {
        this.title = title;
        this.description = description;
        this.isDeleted = isDeleted;
        this.level = level;
        this.createdTime = createdTime;
    }
}
