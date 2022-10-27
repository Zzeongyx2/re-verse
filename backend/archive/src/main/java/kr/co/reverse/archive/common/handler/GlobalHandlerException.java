package kr.co.reverse.archive.common.handler;

import kr.co.reverse.archive.api.response.BaseResponseBody;
import kr.co.reverse.archive.common.error.UserErrorCode;
import kr.co.reverse.archive.common.exception.EmailDuplicateException;
import kr.co.reverse.archive.common.exception.NicknameDuplicateException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalHandlerException {

    @ExceptionHandler(EmailDuplicateException.class)
    public ResponseEntity<? extends BaseResponseBody> handleDuplicateException(EmailDuplicateException ex) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(BaseResponseBody.of(UserErrorCode.EMAIL_DUPLICATE.getStatusCode(),
                        UserErrorCode.EMAIL_DUPLICATE.getMessage()));
    }

    @ExceptionHandler(NicknameDuplicateException.class)
    public ResponseEntity<? extends BaseResponseBody> handleDuplicateException(NicknameDuplicateException ex) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(BaseResponseBody.of(UserErrorCode.NICKNAME_DUPLICATE.getStatusCode(),
                        UserErrorCode.NICKNAME_DUPLICATE.getMessage()));
    }


}
