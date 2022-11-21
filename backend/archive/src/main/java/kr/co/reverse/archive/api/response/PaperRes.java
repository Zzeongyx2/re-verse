package kr.co.reverse.archive.api.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.querydsl.core.annotations.QueryProjection;
import kr.co.reverse.archive.db.entity.Paper;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class PaperRes {

    private UUID id;

    private String title;

    private String content;

    private String writer;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdTime;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime lastEditedTime;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate memoryTime;

    @QueryProjection
    public PaperRes(UUID id, String title, String content, String writer, LocalDateTime createdTime, LocalDateTime lastEditedTime, LocalDate memoryTime) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.createdTime = createdTime;
        this.lastEditedTime = lastEditedTime;
        this.memoryTime = memoryTime;
    }

    public static PaperRes of(Paper paper) {
        PaperRes res = new PaperRes();
        res.setId(paper.getId());
        res.setTitle(paper.getTitle());
        res.setContent(paper.getContent());
        res.setWriter(paper.getWriter());
        res.setCreatedTime(paper.getCreatedTime());
        res.setLastEditedTime(paper.getLastEditedTime());
        res.setMemoryTime(paper.getMemoryTime());
        return res;
    }
}
