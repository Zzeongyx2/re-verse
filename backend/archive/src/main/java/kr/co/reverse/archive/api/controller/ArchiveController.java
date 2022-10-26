package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.ArchiveReq;
import kr.co.reverse.archive.api.response.BaseResponseBody;
import kr.co.reverse.archive.api.service.ArchiveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@RestController
@RequestMapping("/archive")
@RequiredArgsConstructor
public class ArchiveController {

    private final ArchiveService archiveService;

    @PostMapping
    public ResponseEntity<? extends BaseResponseBody> createArchive(@RequestBody ArchiveReq archiveReq) {
        try {
            archiveService.createArchive(archiveReq);
        } catch (Exception e) {
            // 아카이브 생성 실패: 4000, 클라이언트의 잘못된 문법으로 요청 (ex. Null)
            return ResponseEntity.status(200).body(BaseResponseBody.of(4000, "Fail: Invalid Request"));
        }

        return ResponseEntity.status(200).body(BaseResponseBody.of(2000, "Success"));
    }
}
