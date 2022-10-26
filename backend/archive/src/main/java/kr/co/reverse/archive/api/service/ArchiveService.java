package kr.co.reverse.archive.api.service;

import kr.co.reverse.archive.api.request.ArchiveReq;
import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.repository.ArchiveRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ArchiveService {

    private final ArchiveRepository archiveRepository;

    public void createArchive(ArchiveReq archiveReq) throws Exception {
        String title = archiveReq.getTitle();
        String description = archiveReq.getDescription();

        if (title == null || description == null) {
            throw new NullPointerException();
        }

        Archive archive = Archive.builder()
                .title(title)
                .description(description)
                .isDeleted(false)
//                .level()
//                .user()
                .createdTime(LocalDateTime.now())
                .build();

        archiveRepository.save(archive);
    }
}
