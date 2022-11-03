package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.api.response.StuffRes;

import java.util.List;
import java.util.UUID;

public interface StuffRepositoryCustom {

    public List<StuffRes> getStuffs(UUID archiveId);

}
