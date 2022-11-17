package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.ArchiveReq;
import kr.co.reverse.archive.api.request.PaperReq;
import kr.co.reverse.archive.api.response.*;
import kr.co.reverse.archive.api.service.*;
import kr.co.reverse.archive.common.error.CommonErrorCode;
import kr.co.reverse.archive.common.exception.UnauthorizedException;
import kr.co.reverse.archive.db.entity.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/archive")
@RequiredArgsConstructor
public class ArchiveController {

    private final ArchiveService archiveService;

    private final PhotoBookService photoBookService;

    private final StuffService stuffService;

    private final PaperService paperService;

    private final UserService userService;

    private final FriendService friendService;
    private final FileService fileService;

    @PostMapping
    public ResponseEntity createArchive(@RequestBody ArchiveReq archiveReq) {
        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);

        Archive archive = archiveService.createArchive(archiveReq, user);

        for (int i = 1; i <= 3; i++) { // PhotoBook 생성
            photoBookService.createPhotoBook(archive, i);
        }

        for (int i = 1; i <= 3; i++) { // 각 photobook 별 읽기 전용 / 쓰기 전용 stuff 생성
//            stuffService.createStuff(archive, StuffType.READ_ONLY);
            stuffService.createStuff(archive, StuffType.WRITE_ONLY);
        }

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping
    public ResponseEntity<? extends ArchivesRes> getArchives(@RequestParam(name = "type") Integer type) {
        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);

        if (type == 0) {
            List<ArchiveRes> myArchives = archiveService.getArchives(user);
            return ResponseEntity.ok(ArchivesRes.of(myArchives));
        }

        List<ArchiveRes> friendArchives = archiveService.getFriendArchives(user);
        return ResponseEntity.ok(ArchivesRes.of(friendArchives));
    }

    @GetMapping("/{archive_id}")
    public ResponseEntity<? extends ArchiveDetailRes> getArchive(@PathVariable(name = "archive_id") String archiveId) {
        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);
        Archive archive = archiveService.getArchive(UUID.fromString(archiveId));

        if (!friendService.checkArchiveMember(archive, user)) { // Archive 접근 권한 여부 확인
            throw new UnauthorizedException(CommonErrorCode.UNAUTHORIZED_ERROR);
        }

        ArchiveDetailRes archiveDetailRes = archiveService.getArchiveDetail(UUID.fromString(archiveId));

        archiveService.createLastArchive(UUID.fromString(archiveId), user);

        return ResponseEntity.ok(archiveDetailRes);
    }

    @GetMapping("/last")
    public ResponseEntity<? extends ArchiveDetailRes> getLastArchive() {


        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);

        ArchiveDetailRes archiveDetailRes = archiveService.getLastArchiveDetail(user);

        return ResponseEntity.ok(archiveDetailRes);

    }

    @PatchMapping("/{archive_id}")
    public ResponseEntity updateArchive(@PathVariable(name = "archive_id") String archiveId,
                                        @RequestBody ArchiveReq archiveReq) {
        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);

        Boolean isOwner = archiveService.checkOwner(UUID.fromString(archiveId), UUID.fromString(userId));
        if (!isOwner) { // Archive 글쓰기 권한 확인
            throw new UnauthorizedException(CommonErrorCode.UNAUTHORIZED_ERROR);
        }

        archiveService.updateArchive(UUID.fromString(archiveId), archiveReq);

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @DeleteMapping("/{archive_id}")
    public ResponseEntity deleteArchive(@PathVariable(name = "archive_id") String archiveId) {
        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);

        Boolean isOwner = archiveService.checkOwner(UUID.fromString(archiveId), UUID.fromString(userId));
        if (!isOwner) { // Archive 글쓰기 권한 확인
            throw new UnauthorizedException(CommonErrorCode.UNAUTHORIZED_ERROR);
        }

        archiveService.deleteArchive(UUID.fromString(archiveId));

        if (user.getBestArchiveId().equals(archiveId)) {
            userService.updateBestArchive(userId, null);
        }

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @GetMapping("/{archive_id}/stuff/{stuff_id}")
    public ResponseEntity<? extends PapersRes> getPapers(@PathVariable(name = "archive_id") String archiveId,
                                                         @PathVariable(name = "stuff_id") String stuffId) {
        Stuff stuff = stuffService.getStuff(UUID.fromString(stuffId));
        List<Paper> papers = paperService.getPapers(stuff);

        return ResponseEntity.ok(PapersRes.of(papers));
    }

    @PostMapping("/{archive_id}/stuff/{stuff_id}/paper")
    public ResponseEntity createPaper(@PathVariable(name = "archive_id") String archiveId,
                                      @PathVariable(name = "stuff_id") String stuffId,
                                      @RequestBody PaperReq paperReq) {
        Stuff stuff = stuffService.getStuff(UUID.fromString(stuffId));
        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);

        Boolean isOwner = archiveService.checkOwner(UUID.fromString(archiveId), UUID.fromString(userId));
        if (!isOwner) { // Archive 글쓰기 권한 확인
            throw new UnauthorizedException(CommonErrorCode.UNAUTHORIZED_ERROR);
        }
        paperService.createPaper(paperReq, stuff, user);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/{archive_id}/stuff/{stuff_id}/paper/{paper_id}")
    public ResponseEntity<? extends PaperRes> getPaper(@PathVariable(name = "archive_id") String archiveId,
                                                       @PathVariable(name = "stuff_id") String stuffId,
                                                       @PathVariable(name = "paper_id") String paperId) {
        Paper paper = paperService.getPaper(UUID.fromString(paperId));

        return ResponseEntity.ok(PaperRes.of(paper));
    }

    @PatchMapping("/{archive_id}/stuff/{stuff_id}/paper/{paper_id}")
    public ResponseEntity<? extends PaperRes> updatePaper(@PathVariable(name = "archive_id") String archiveId,
                                                          @PathVariable(name = "stuff_id") String stuffId,
                                                          @PathVariable(name = "paper_id") String paperId,
                                                          @RequestBody PaperReq paperReq) {
        Stuff stuff = stuffService.getStuff(UUID.fromString(stuffId));
        String userId = userService.getUserId();

        Boolean isOwner = archiveService.checkOwner(UUID.fromString(archiveId), UUID.fromString(userId));
        if (!isOwner) { // Archive 수정 권한 확인
            throw new UnauthorizedException(CommonErrorCode.UNAUTHORIZED_ERROR);
        }
        paperService.updatePaper(paperReq, stuff, UUID.fromString(paperId));

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @DeleteMapping("/{archive_id}/stuff/{stuff_id}/paper/{paper_id}")
    public ResponseEntity deletePaper(@PathVariable(name = "archive_id") String archiveId,
                                      @PathVariable(name = "stuff_id") String stuffId,
                                      @PathVariable(name = "paper_id") String paperId) {
        String userId = userService.getUserId();

        Boolean isOwner = archiveService.checkOwner(UUID.fromString(archiveId), UUID.fromString(userId));
        if (!isOwner) { // Archive 삭제 권한 확인
            throw new UnauthorizedException(CommonErrorCode.UNAUTHORIZED_ERROR);
        }
        paperService.deletePaper(UUID.fromString(paperId));

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @PostMapping("/image")
    public ResponseEntity<? extends ImageRes> createImageUrl(@RequestPart(name = "images") List<MultipartFile> multipartFiles) {

        List<String> urls = fileService.uploadFiles(multipartFiles);

        return ResponseEntity.ok(ImageRes.builder().urls(urls).build());
    }
}
