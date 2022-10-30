package kr.co.reverse.archive.api.response;

import kr.co.reverse.archive.db.entity.Archive;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ArchivesRes {

    private List<ArchiveRes> archives = new ArrayList<>();

    public static ArchivesRes of(List<Archive> archives) {
        if(archives == null) {
            return null;
        }

        ArchivesRes res = new ArchivesRes();
        res.setArchives(archives);
        return res;
    }

    public void setArchives(List<Archive> archives) {
        for (Archive archive : archives) {
            this.archives.add(ArchiveRes.of(archive));
        }
    }
}
