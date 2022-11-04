package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class ArchiveMember {

    @Id
    @GeneratedValue
    @Column(name = "archive_member_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "archive_id")
    private Archive archive;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Builder
    public ArchiveMember(Archive archive, User user, Role role) {
        this.archive = archive;
        this.user = user;
        this.role = role;
    }
}
