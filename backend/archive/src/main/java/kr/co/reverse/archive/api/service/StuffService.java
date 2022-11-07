package kr.co.reverse.archive.api.service;

import kr.co.reverse.archive.api.response.StuffRes;
import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.Stuff;
import kr.co.reverse.archive.db.entity.StuffType;
import kr.co.reverse.archive.db.repository.StuffRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class StuffService {

    private final StuffRepository stuffRepository;

    @Transactional
    public void createStuff(Archive archive, StuffType type) {
        // TODO: 이후 사용자 임의 배치 기능 넣을 시, position 값 설정하기

        Stuff stuff = Stuff.builder()
                .archive(archive)
                .name("stuff")
                .type(type)
//                .position()
                .createdTime(LocalDateTime.now())
                .isDeleted(false)
                .build();

        stuffRepository.save(stuff);
    }

    public Stuff getStuff(UUID stuffId) {
        return stuffRepository.findById(stuffId)
                .orElseThrow(() -> new NoSuchElementException());
    }

    public List<StuffRes> getStuffs(UUID archiveId) {
        return stuffRepository.getStuffs(archiveId);
    }

}
