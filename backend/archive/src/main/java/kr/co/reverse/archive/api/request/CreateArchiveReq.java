package kr.co.reverse.archive.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateArchiveReq {
    private String title;

    private String description;
}
