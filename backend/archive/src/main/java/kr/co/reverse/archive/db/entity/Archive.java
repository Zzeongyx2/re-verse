package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
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
@Table(name = "archive", indexes = {
        @Index(name = "idx__ownerId", columnList = "owner_id")
})
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

    @Type(type = "uuid-char")
    @Column(name = "owner_id")
    private UUID ownerId;

    @OneToMany(mappedBy = "archive", fetch = FetchType.LAZY)
    private List<Stuff> stuffs = new ArrayList<>();

    @OneToMany(mappedBy = "archive", fetch = FetchType.LAZY)
    private List<ArchiveMember> members = new ArrayList<>();

    @OneToMany(mappedBy = "archive", fetch = FetchType.LAZY)
    private List<PhotoBook> photoBooks = new ArrayList<>();

//    private List<GuestBook> guestBooks = new ArrayList<>();

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Builder
    public Archive(String title, String description, Boolean isDeleted, LocalDateTime createdTime, UUID ownerId, List<Stuff> stuffs, List<ArchiveMember> members, List<PhotoBook> photoBooks) {
        this.title = title;
        this.description = description;
        this.isDeleted = isDeleted;
        this.createdTime = createdTime;
        this.ownerId = ownerId;
        this.stuffs = stuffs;
        this.members = members;
        this.photoBooks = photoBooks;
    }
}
