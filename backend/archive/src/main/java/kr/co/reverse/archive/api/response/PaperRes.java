package kr.co.reverse.archive.api.response;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@ToString
public class PaperRes {

    private UUID id;

    private String title;

    private String content;

    private String writer;

    private LocalDateTime createdTime;

    private LocalDateTime lastEditedTime;

    private LocalDateTime memoryTime;

    @QueryProjection

    public PaperRes(UUID id, String title, String content, String writer, LocalDateTime createdTime, LocalDateTime lastEditedTime, LocalDateTime memoryTime) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.createdTime = createdTime;
        this.lastEditedTime = lastEditedTime;
        this.memoryTime = memoryTime;
    }
}
