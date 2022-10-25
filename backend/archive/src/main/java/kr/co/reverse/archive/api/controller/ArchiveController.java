package kr.co.reverse.archive.api.controller;

import kr.co.reverse.archive.api.request.ArchiveReq;
import kr.co.reverse.archive.api.response.BaseResponseBody;
import kr.co.reverse.archive.api.service.ArchiveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/archive")
@RequiredArgsConstructor
public class ArchiveController {

    private final ArchiveService archiveService;

    @PostMapping
    private ResponseEntity<? extends BaseResponseBody> createArchive(@RequestBody ArchiveReq archiveInfo) {
        

        return ResponseEntity.status(200).body(BaseResponseBody.of(2000, "Success"));
    }
}
