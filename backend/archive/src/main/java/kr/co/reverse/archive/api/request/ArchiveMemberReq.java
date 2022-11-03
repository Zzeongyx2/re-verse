package kr.co.reverse.archive.api.request;

import kr.co.reverse.archive.db.entity.Role;
import lombok.Data;

import java.util.UUID;

@Data
public class ArchiveMemberReq {

    UUID archiveId;
    String nickname;
    Role role;
}
