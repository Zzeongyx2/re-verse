package kr.co.reverse.archive.api.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.querydsl.core.annotations.QueryProjection;
import kr.co.reverse.archive.db.entity.Paper;
import kr.co.reverse.archive.db.entity.StuffType;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@ToString
public class StuffRes {

    private UUID id;

//    private String name;

//    private String position;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdTime;

    private StuffType type;

    private List<Paper> papers = new ArrayList<>();

    @QueryProjection
    public StuffRes(UUID id, LocalDateTime createdTime, StuffType type) {
        this.id = id;
        this.createdTime = createdTime;
        this.type = type;
    }
}
