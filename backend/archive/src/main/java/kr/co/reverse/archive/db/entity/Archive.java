package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
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

    private LocalDateTime createdTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner")
    private User owner;

//    private List<Stuff> stuffs = new ArrayList<>();

//    private List<User> members = new ArrayList<>();

//    private List<User> members = new ArrayList<>();

//    private List<PhotoBook> photoBooks = new ArrayList<>();

//    private List<GuestBook> guestBooks = new ArrayList<>();

    @Builder
    public Archive(String title, String description, Boolean isDeleted, LocalDateTime createdTime, User owner, List<User> members) {
        this.title = title;
        this.description = description;
        this.isDeleted = isDeleted;
        this.createdTime = createdTime;
        this.owner = owner;
//        this.members = members;
    }
}
