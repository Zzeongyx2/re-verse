package kr.co.reverse.archive.api.response;

import kr.co.reverse.archive.db.entity.Paper;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
public class PapersRes {

    List<PaperRes> papers = new ArrayList<>();

    public static PapersRes of(List<Paper> papers) {
        PapersRes res = new PapersRes();
        res.setPapers(papers);
        return res;
    }

    public void setPapers(List<Paper> papers) {
        for(Paper paper: papers) {
            this.papers.add(PaperRes.of(paper));
        }
    }
}
