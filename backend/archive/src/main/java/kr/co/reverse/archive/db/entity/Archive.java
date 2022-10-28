package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor
public class Archive {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Type(type = "uuid-char")
    @Column(name = "archive_id")
    private UUID id;

    private String title;

    private String description;

    private Boolean isDeleted;

    private Integer level;

    private LocalDateTime createdTime;

//    @OneToOne
//    @JoinColumn(name = "user_id")
//    private User user;

//    private List<Stuff> stuffs = new ArrayList<>();

//    private List<User> members = new ArrayList<>();

//    private List<PhotoBook> photoBooks = new ArrayList<>();

//    private List<GuestBook> guestBooks = new ArrayList<>();

    @Builder
    public Archive(String title, String description, Boolean isDeleted, Integer level, LocalDateTime createdTime) {
        this.title = title;
        this.description = description;
        this.isDeleted = isDeleted;
        this.level = level;
        this.createdTime = createdTime;
    }
}
