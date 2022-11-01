package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.api.response.ArchiveRes;
import kr.co.reverse.archive.db.entity.User;

import java.util.List;

public interface ArchiveRepositoryCustom {

    public List<ArchiveRes> getFriendArchives(User user);

}
