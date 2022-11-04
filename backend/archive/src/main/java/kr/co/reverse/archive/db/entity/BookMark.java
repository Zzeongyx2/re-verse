package kr.co.reverse.archive.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class BookMark {
    // 북마크에는 똑같은 아카이브 id가 여러개 있을 수 있다. (Friend 가 다르면 괜찮기 때문)
    // 따라서 북마크는 many 이다.

    @Id
    @GeneratedValue
    @Column(name = "bookmark_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "archive_id")
    private Archive archive;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public BookMark(Archive archive, User user){
        this.archive = archive;
        this.user = user;
    }


}
