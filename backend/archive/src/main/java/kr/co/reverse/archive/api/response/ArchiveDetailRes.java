package kr.co.reverse.archive.api.response;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@ToString
public class ArchiveDetailRes {

    private UUID id;

    private String title;

    private String description;

    private UserRes owner;

    private List<StuffRes> stuffs = new ArrayList<>();

    private List<UserRes> members = new ArrayList<>();

    //    private List<PhotoBook> photoBooks = new ArrayList<>();

    //    private List<GuestBook> guestBooks = new ArrayList<>();

    @QueryProjection
    public ArchiveDetailRes(UUID id, String title, String description, UserRes owner) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.owner = owner;
    }
}
