package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.api.response.ArchiveDetailRes;
import kr.co.reverse.archive.api.response.ArchiveRes;
import kr.co.reverse.archive.api.response.UserRes;

import java.util.List;
import java.util.UUID;

public interface ArchiveRepositoryCustom {

    public ArchiveDetailRes getArchiveDetail(UUID archiveId);

    public List<ArchiveRes> getMyArchives(UUID userId);

    public List<ArchiveRes> getFriendArchives(UUID userId);

    public List<UserRes> getMembers(UUID archiveId);

    public Boolean checkBookmark(UUID archiveId, UUID userId);
}
