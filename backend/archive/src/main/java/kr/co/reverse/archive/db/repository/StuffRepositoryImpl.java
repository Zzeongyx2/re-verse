package kr.co.reverse.archive.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.reverse.archive.api.response.QStuffRes;
import kr.co.reverse.archive.api.response.StuffRes;
import kr.co.reverse.archive.db.entity.QStuff;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
public class StuffRepositoryImpl implements StuffRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<StuffRes> getStuffs(UUID archiveId) {
        return jpaQueryFactory
                .select(
                        new QStuffRes(
                                QStuff.stuff.id,
                                QStuff.stuff.createdTime,
                                QStuff.stuff.type
                        )
                )
                .from(QStuff.stuff)
                .where(QStuff.stuff.archive.id.eq(archiveId))
                .distinct()
                .fetch();
    }

}
