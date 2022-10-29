package kr.co.reverse.archive.api.response;

import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class ArchiveRes {

    private UUID archiveId;

    // TODO: user 필요 정보 추출
    // private User user;

    private String title;

    private String description;

    // TODO: bookmarks 필요 정보 추출
//    private Boolean bookmark;

//    private List<User> members;

    public static ArchiveRes of(Archive archive) {
        if(archive == null) return null;

        ArchiveRes res = new ArchiveRes();

        res.setArchiveId(archive.getId());
        res.setTitle(archive.getTitle());
        res.setDescription(archive.getDescription());

        return res;
    }
}
