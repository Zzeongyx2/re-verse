package kr.co.reverse.archive.api.service;

import kr.co.reverse.archive.api.request.PaperReq;
import kr.co.reverse.archive.common.error.CommonErrorCode;
import kr.co.reverse.archive.common.exception.UnauthorizedException;
import kr.co.reverse.archive.db.entity.Paper;
import kr.co.reverse.archive.db.entity.Stuff;
import kr.co.reverse.archive.db.entity.StuffType;
import kr.co.reverse.archive.db.entity.User;
import kr.co.reverse.archive.db.repository.PaperRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PaperService {

    private final PaperRepository paperRepository;

    @Transactional
    public void createPaper(PaperReq paperReq, Stuff stuff, User user) {
        String title = paperReq.getTitle();
        String content = paperReq.getContent();
        LocalDate memoryTime = paperReq.getMemoryTime();

        if (stuff.getType() == StuffType.READ_ONLY) {
            throw new UnauthorizedException(CommonErrorCode.UNAUTHORIZED_ERROR);
        }

        if (title == null || content == null || memoryTime == null) {
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

    public List<Paper> getPapers(Stuff stuff) {
        return paperRepository.findAllByStuffOrderByMemoryTimeAscCreatedTimeDesc(stuff);
    }

    @Transactional
    public void updatePaper(PaperReq paperReq, Stuff stuff, UUID paperId) {
        Paper paper = paperRepository.findById(paperId)
                .orElseThrow(() -> new NoSuchElementException());

        String title = paperReq.getTitle();
        String content = paperReq.getContent();
        LocalDate memoryTime = paperReq.getMemoryTime();

        if (stuff.getType() == StuffType.READ_ONLY) {
            throw new UnauthorizedException(CommonErrorCode.UNAUTHORIZED_ERROR);
        }

        if (title == null || content == null || memoryTime == null) {
            throw new IllegalArgumentException();
        }

        paper.setTitle(title);
        paper.setContent(content);
        paper.setMemoryTime(memoryTime);
        paper.setLastEditedTime(LocalDateTime.now());
    }

    @Transactional
    public void deletePaper(UUID paperId) {
        // TODO: isDeleted로 변경
        paperRepository.deleteById(paperId);
    }

    public Paper getPaper(UUID paperId) {
        return paperRepository.findById(paperId)
                .orElseThrow(() -> new NoSuchElementException());
    }

}
