package kr.co.reverse.archive.api.service;

import kr.co.reverse.archive.api.request.PaperReq;
import kr.co.reverse.archive.db.entity.Paper;
import kr.co.reverse.archive.db.entity.Stuff;
import kr.co.reverse.archive.db.entity.User;
import kr.co.reverse.archive.db.repository.PaperRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class PaperService {

    private final PaperRepository paperRepository;

    @Transactional
    public void createPaper(PaperReq paperReq, Stuff stuff, User user) {
        String title = paperReq.getTitle();
        String content = paperReq.getContent();
//        LocalDateTime memoryTime = paperReq.getMemoryTime();

        if (title == null || content == null) {
            throw new IllegalArgumentException();
        }

        Paper paper = Paper.builder()
                .stuff(stuff)
                .title(title)
                .content(content)
                .writer(user.getNickname())
                .isDeleted(false)
                .createdTime(LocalDateTime.now())
                .lastEditedTime(LocalDateTime.now())
                .memoryTime(paperReq.getMemoryTime())
                .build();

        paperRepository.save(paper);
    }

}
