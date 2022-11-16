package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.ArchiveReq;
import kr.co.reverse.archive.api.request.PaperReq;
import kr.co.reverse.archive.api.response.*;
import kr.co.reverse.archive.api.service.*;
import kr.co.reverse.archive.db.entity.*;
import kr.co.reverse.archive.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    private final UserRepository userRepository;
    private final UserService userService;


    @PostMapping
    public ResponseEntity createArchive(@RequestBody ArchiveReq archiveReq) {
        // TODO: redis에서 cookie 내 access token에 해당하는 정보를 갖고 와서, user 정보 불러오기

//        User test = userRepository.findByNickname("test");
//        if(test == null) {
//            User user = User.builder().nickname("test").build();
//            userRepository.save(user);
//            test = userRepository.findByNickname("test");
//        }

        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);


        Archive archive = archiveService.createArchive(archiveReq, user);

        for (int i = 1; i <= 3; i++) { // PhotoBook 생성
            photoBookService.createPhotoBook(archive, i);
        }

        for (int i = 1; i <= 3; i++) { // 각 photobook 별 읽기 전용 / 쓰기 전용 stuff 생성
            stuffService.createStuff(archive, StuffType.READ_ONLY);
            stuffService.createStuff(archive, StuffType.WRITE_ONLY);
        }

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping
    public ResponseEntity getArchives(@RequestParam(name = "type") Integer type) {
        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);

        if (type == 0) { // 내 아카이브 조회
            // TODO: redis에서 cookie 내 access token에 해당하는 정보를 갖고 와서, user 정보 불러오기

            List<ArchiveRes> myArchives = archiveService.getArchives(user);

            return ResponseEntity.ok(ArchivesRes.of(myArchives));
        }

        List<ArchiveRes> friendArchives = archiveService.getFriendArchives(user);

        return ResponseEntity.ok(ArchivesRes.of(friendArchives));
    }

    @GetMapping("/{archive_id}")
    public ResponseEntity<? extends ArchiveDetailRes> getArchive(@PathVariable(name = "archive_id") String archiveId) {
        // TODO: Archive 접근 권한 여부 확인
        // return ResponseEntity.status(HttpStatus.FORBIDDEN).body()

        ArchiveDetailRes archiveDetailRes = archiveService.getArchiveDetail(UUID.fromString(archiveId));

        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);

        archiveService.createLastArchive(UUID.fromString(archiveId), user);

        return ResponseEntity.ok(archiveDetailRes);

    }

    @GetMapping("/last")
    public ResponseEntity<? extends ArchiveDetailRes> getLastArchive() {
        // TODO: Archive 접근 권한 여부 확인
        // return ResponseEntity.status(HttpStatus.FORBIDDEN).body()

        String userId = userService.getUserId();
        User user = userService.getPlayer(userId);

        ArchiveDetailRes archiveDetailRes = archiveService.getLastArchiveDetail(user);

        return ResponseEntity.ok(archiveDetailRes);

    }

    @PatchMapping("/{archive_id}")
    public ResponseEntity updateArchive(@PathVariable(name = "archive_id") String archiveId,
                                        @RequestBody ArchiveReq archiveReq) {

//        archiveService.updateArchive(UUID.fromString(archiveId));

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @DeleteMapping("/{archive_id}")
    public ResponseEntity deleteArchive(@PathVariable(name = "archive_id") String archiveId) {
        // TODO: Archive 삭제 권한 여부 확인

//        archiveService.deleteArchive(UUID.fromString(archiveId));

        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @PostMapping("/{archive_id}/stuff/{stuff_id}/paper")
    public ResponseEntity createPaper(@PathVariable(name = "archive_id") String archiveId,
                                      @PathVariable(name = "stuff_id") String stuffId,
                                      @RequestBody PaperReq paperReq) {
        Stuff stuff = stuffService.getStuff(UUID.fromString(stuffId));
        User test = userRepository.findByNickname("test");

        paperService.createPaper(paperReq, stuff, test);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/{archive_id}/stuff/{stuff_id}/paper")
    public ResponseEntity<? extends PapersRes> getPapers(@PathVariable(name = "archive_id") String archiveId,
                                                         @PathVariable(name = "stuff_id") String stuffId) {
        Stuff stuff = stuffService.getStuff(UUID.fromString(stuffId));
        List<Paper> papers = paperService.getPapers(stuff);

        return ResponseEntity.ok(PapersRes.of(papers));
    }

    @GetMapping("/{archive_id}/stuff/{stuff_id}/paper/{paper_id}")
    public ResponseEntity<? extends PaperRes> getPaper(@PathVariable(name = "archive_id") String archiveId,
                                                       @PathVariable(name = "stuff_id") String stuffId,
                                                       @PathVariable(name = "paper_id") String paperId) {
        Paper paper = paperService.getPaper(UUID.fromString(paperId));

        return ResponseEntity.ok(PaperRes.of(paper));
    }
}
