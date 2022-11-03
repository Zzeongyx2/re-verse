package kr.co.reverse.archive.api.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@ToString
public class PaperReq {

    private String title;

    private String content;

    private LocalDateTime memoryTime;

}
