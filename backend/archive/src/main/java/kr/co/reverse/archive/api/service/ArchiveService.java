package kr.co.reverse.archive.api.service;

import kr.co.reverse.archive.api.request.ArchiveReq;
import kr.co.reverse.archive.api.response.ArchiveRes;
import kr.co.reverse.archive.api.response.UserRes;
import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.ArchiveMember;
import kr.co.reverse.archive.db.entity.Role;
import kr.co.reverse.archive.db.entity.User;
import kr.co.reverse.archive.db.repository.ArchiveMemberRepository;
import kr.co.reverse.archive.db.repository.ArchiveRepository;
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

    private final ArchiveMemberRepository archiveMemberRepository;

    @Transactional
    public void createArchive(ArchiveReq archiveReq, User user) {
        String title = archiveReq.getTitle();
        String description = archiveReq.getDescription();

        if (title == null || description == null) {
            throw new IllegalArgumentException();
        }

        Archive archive = Archive.builder()
                .title(title)
                .description(description)
                .isDeleted(false)
                .ownerId(user.getId())
                .createdTime(LocalDateTime.now())
                .build();
        archiveRepository.save(archive);

        ArchiveMember archiveMember = ArchiveMember.builder()
                .archive(archive)
                .user(user)
                .role(Role.READ)
                .build();
        archiveMemberRepository.save(archiveMember);
    }

    public List<ArchiveRes> getArchives(User user) {
        List<ArchiveRes> myArchives = archiveRepository.getMyArchives(user.getId());

        if (myArchives != null) {
            for (ArchiveRes archiveRes : myArchives) {
                UUID archiveId = archiveRes.getArchiveId();
                List<UserRes> members = archiveRepository.getMembers(archiveId);
                archiveRes.setMembers(members);
            }
        }

        // TODO: Bookmark response 추가

        return myArchives;
    }

    public List<ArchiveRes> getFriendArchives(User user) {
        List<ArchiveRes> friendArchives = archiveRepository.getFriendArchives(user.getId());

        if (friendArchives != null) {
            for (ArchiveRes archiveRes : friendArchives) {
                UUID archiveId = archiveRes.getArchiveId();
                List<UserRes> members = archiveRepository.getMembers(archiveId);
                archiveRes.setMembers(members);
            }
        }

        // TODO: Bookmark response 추가

        return friendArchives;
    }

    public Archive getArchive(UUID archiveId) {
        return archiveRepository
                .findById(archiveId)
                .orElseThrow(() -> new NoSuchElementException());
    }

}
