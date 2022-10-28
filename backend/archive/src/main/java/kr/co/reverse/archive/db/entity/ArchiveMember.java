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

    @ManyToOne
    @JoinColumn(name = "archive_id")
    private Archive archive;

    @ManyToOne
    @JoinColumn(name = "friend_id")
    private Friend friend;

    private Role role;

    @Builder
    public ArchiveMember(Archive archive, Friend friend, Role role){
        this.archive = archive;
        this.friend = friend;
        this.role = role;

    }

}
