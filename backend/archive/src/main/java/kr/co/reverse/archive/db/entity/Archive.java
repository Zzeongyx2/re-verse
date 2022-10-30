package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;
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

    private Integer level;

    private LocalDate createdTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

//    private List<Stuff> stuffs = new ArrayList<>();

    @OneToMany(mappedBy = "archive")
    private List<ArchiveMember> members = new ArrayList<>();

//    private List<PhotoBook> photoBooks = new ArrayList<>();

//    private List<GuestBook> guestBooks = new ArrayList<>();

    @Builder
    public Archive(String title, String description, Boolean isDeleted, Integer level, LocalDate createdTime) {
        // id값을 유니크 난수 값으로 만들어서 저장해야함
        this.title = title;
        this.description = description;
        this.isDeleted = isDeleted;
        this.level = level;
        this.createdTime = createdTime;
    }

}
