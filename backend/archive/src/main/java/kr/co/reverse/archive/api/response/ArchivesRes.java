package kr.co.reverse.archive.api.response;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class ArchivesRes {

    private List<ArchiveRes> archives = new ArrayList<>();

    public static ArchivesRes of(List<ArchiveRes> archives) {
        ArchivesRes res = new ArchivesRes();
        res.setArchives(archives);
        return res;
    }

}
