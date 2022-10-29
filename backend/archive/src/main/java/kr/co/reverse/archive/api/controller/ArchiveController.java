package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.ArchiveReq;
import kr.co.reverse.archive.api.response.ArchiveRes;
import kr.co.reverse.archive.api.response.ArchivesRes;
import kr.co.reverse.archive.api.service.ArchiveService;
import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/archive")
@RequiredArgsConstructor
public class ArchiveController {

    private final ArchiveService archiveService;


    @PostMapping
    public ResponseEntity createArchive(@RequestBody ArchiveReq archiveReq) {
        archiveService.createArchive(archiveReq);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping
    public ResponseEntity<? extends ArchivesRes> getArchives(@RequestParam(name = "type") Integer type) {

        if (type == 0) { // 내 아카이브 조회
            // TODO: redis에서 cookie 내 access token에 해당하는 정보를 갖고 와서, user 정보 불러오기
            User user = User.builder().nickname("test").build();

            List<Archive> myArchives = archiveService.getArchives(user);

            return ResponseEntity.ok(ArchivesRes.of(myArchives));
        }

        // TODO: Friend API 완성 이후, 친구 아카이브 목록 리스트 조회 기능 추가
        return ResponseEntity.ok(ArchivesRes.of(null));
    }
}
