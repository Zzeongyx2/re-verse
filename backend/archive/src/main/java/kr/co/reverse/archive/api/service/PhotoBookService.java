package kr.co.reverse.archive.api.service;

import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.PhotoBook;
import kr.co.reverse.archive.db.entity.Theme;
import kr.co.reverse.archive.db.repository.PhotoBookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PhotoBookService {

    private final PhotoBookRepository photoBookRepository;

    private static Theme[] intToTheme = { Theme.TRAVEL, Theme.PARTY, Theme.DAILY }; // 임시 value

    @Transactional
    public void createPhotoBook(Archive archive, Integer location) {
        PhotoBook photoBook = PhotoBook.builder()
                .archive(archive)
                .theme(intToTheme[location-1])
                .location(location)
                .isDeleted(false)
                .createdTime(LocalDateTime.now())
                .build();

        photoBookRepository.save(photoBook);
    }

}
