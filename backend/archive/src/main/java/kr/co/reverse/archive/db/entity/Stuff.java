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
public class Stuff {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Type(type = "uuid-char")
    @Column(name = "stuff_id")
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "archive_id")
    private Archive archive;

    private String name;

    private String position;

    private Boolean isDeleted;

    private LocalDateTime createdTime;

    @Enumerated(EnumType.STRING)
    private StuffType type;

    @OneToMany(mappedBy = "stuff", fetch = FetchType.LAZY)
    private List<Paper> papers = new ArrayList<>();

    @Builder
    public Stuff(Archive archive, String name, String position, Boolean isDeleted, LocalDateTime createdTime, StuffType type, List<Paper> papers) {
        this.archive = archive;
        this.name = name;
        this.position = position;
        this.isDeleted = isDeleted;
        this.createdTime = createdTime;
        this.type = type;
        this.papers = papers;
    }
}
