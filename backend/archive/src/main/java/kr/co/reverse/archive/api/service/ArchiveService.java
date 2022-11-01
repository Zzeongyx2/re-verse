package kr.co.reverse.archive.api.service;

import kr.co.reverse.archive.api.request.ArchiveReq;
import kr.co.reverse.archive.api.response.ArchiveRes;
import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.User;
import kr.co.reverse.archive.db.repository.ArchiveRepository;
import kr.co.reverse.archive.db.repository.FriendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ArchiveService {

    private final ArchiveRepository archiveRepository;

    private final FriendRepository friendRepository;

    @Transactional
    public void createArchive(ArchiveReq archiveReq) {
        String title = archiveReq.getTitle();
        String description = archiveReq.getDescription();

        if (title == null || description == null) {
            throw new IllegalArgumentException();
        }

        Archive archive = Archive.builder()
                .title(title)
                .description(description)
                .isDeleted(false)
//                .user()
                .createdTime(LocalDateTime.now())
                .build();

        archiveRepository.save(archive);
    }

    public List<Archive> getArchives(User user) {
        return archiveRepository.findAllByOwner(user);
    }

    public Archive getArchive(UUID archiveId) {
        return archiveRepository
                .findById(archiveId)
                .orElseThrow(() -> new NoSuchElementException());
    }

    public List<ArchiveRes> getFriendArchives(User user) {

        List<ArchiveRes> friendArchives = archiveRepository.getFriendArchives(user);

        // TODO: Bookmark response 추가

        return friendArchives;
    }
}
