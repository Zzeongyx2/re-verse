package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor
public class LastArchive {

    @Id
    @GeneratedValue
    @Column(name = "last_archive_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "user_id", name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "archive_id", name = "archive_id")
    private Archive archive;

    private LocalDateTime time;
    @Builder
    public LastArchive(User user, Archive archive, LocalDateTime time) {
        this.user = user;
        this.archive = archive;
        this.time = time;
    }

}
