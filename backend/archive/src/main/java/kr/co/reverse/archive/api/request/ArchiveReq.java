package kr.co.reverse.archive.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArchiveReq {
    private String title;

    private String description;

    public static ArchiveReq of(String title, String description) {
        ArchiveReq req = new ArchiveReq();
        req.setTitle(title);
        req.setDescription(description);
        return req;
    }
}
