package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.api.response.ArchiveDetailRes;
import kr.co.reverse.archive.api.response.ArchiveRes;
import kr.co.reverse.archive.api.response.UserRes;

import java.util.List;
import java.util.UUID;

public interface ArchiveRepositoryCustom {

    ArchiveDetailRes getArchiveDetail(UUID archiveId);

    List<ArchiveRes> getMyArchives(UUID userId);

    List<ArchiveRes> getFriendArchives(UUID userId);

    List<UserRes> getMembers(UUID archiveId);

    Boolean checkBookmark(UUID archiveId, UUID userId);

    List<ArchiveRes> getBookmarkArchive(UUID userId);
}
