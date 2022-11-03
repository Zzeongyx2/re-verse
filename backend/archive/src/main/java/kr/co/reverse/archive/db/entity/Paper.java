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
public class Paper {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Type(type = "uuid-char")
    @Column(name = "paper_id")
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "stuff_id")
    private Stuff stuff;

    private String title;

    @Column(columnDefinition = "LONGTEXT")
    private String content;

    private String writer;

    private Boolean isDeleted;

    private LocalDateTime createdTime;

    private LocalDateTime lastEditedTime;

    private LocalDateTime memoryTime;

    @Builder
    public Paper(Stuff stuff, String title, String content, String writer, Boolean isDeleted, LocalDateTime createdTime, LocalDateTime lastEditedTime, LocalDateTime memoryTime) {
        this.stuff = stuff;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.isDeleted = isDeleted;
        this.createdTime = createdTime;
        this.lastEditedTime = lastEditedTime;
        this.memoryTime = memoryTime;
    }
}
