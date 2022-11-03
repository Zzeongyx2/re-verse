package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor
public class PhotoBook {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Type(type = "uuid-char")
    @Column(name = "photobook_id")
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "archive_id")
    private Archive archive;

    private Integer location;

    @Enumerated(EnumType.STRING)
    private Theme theme;

    private Boolean isDeleted;

    private LocalDateTime createdTime;

    @Builder
    public PhotoBook(Archive archive, Integer location, Theme theme, Boolean isDeleted, LocalDateTime createdTime) {
        this.archive = archive;
        this.location = location;
        this.theme = theme;
        this.isDeleted = isDeleted;
        this.createdTime = createdTime;
    }
}
