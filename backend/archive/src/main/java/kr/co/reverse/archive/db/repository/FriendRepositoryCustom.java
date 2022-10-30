package kr.co.reverse.archive.db.repository;

import kr.co.reverse.archive.api.response.FriendRes;
import kr.co.reverse.archive.db.entity.User;

import java.util.List;

public interface FriendRepositoryCustom {
    // jpa interface로 되지 않는 쿼리문의 경우 이것을 사용
    public List<FriendRes> list(User user);
}
