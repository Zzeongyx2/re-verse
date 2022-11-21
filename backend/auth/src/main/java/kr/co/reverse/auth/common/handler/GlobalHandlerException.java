package kr.co.reverse.auth.common.handler;

import io.jsonwebtoken.ExpiredJwtException;
import io.lettuce.core.RedisException;
import kr.co.reverse.auth.common.error.AuthErrorCode;
import kr.co.reverse.auth.common.error.CommonErrorCode;
import kr.co.reverse.auth.common.error.ErrorCode;
import kr.co.reverse.auth.common.error.UserErrorCode;
import kr.co.reverse.auth.common.exception.*;
import kr.co.reverse.auth.common.response.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.security.sasl.AuthenticationException;
import java.util.NoSuchElementException;

@RestControllerAdvice
@Slf4j
public class GlobalHandlerException extends ResponseEntityExceptionHandler {

    // TODO: 배포 시, response로 주지 않고, log로만 남기기

    /**
     * 개발 시, 편의상 response로 제공해주지만,
     * 실제 운영 환경에서는 response로 custom status code와 message는 주지 않고,
     * HTTP status code만 응답으로 제공해줌
     */

    @ExceptionHandler(ExpiredTokenException.class)
    public ResponseEntity<? extends ErrorResponse> handleAuthenticationException(ExpiredTokenException e) {
        return handleExceptionInternal(HttpStatus.UNAUTHORIZED, AuthErrorCode.EXPIRE_TOKEN);
    }
    @ExceptionHandler(EmailDuplicateException.class)
    public ResponseEntity<? extends ErrorResponse> handleDuplicateException(EmailDuplicateException e) {
        return handleExceptionInternal(HttpStatus.CONFLICT, UserErrorCode.EMAIL_DUPLICATE);
    }

    @ExceptionHandler(NicknameDuplicateException.class)
    public ResponseEntity<? extends ErrorResponse> handleDuplicateException(NicknameDuplicateException e) {
        return handleExceptionInternal(HttpStatus.CONFLICT, UserErrorCode.NICKNAME_DUPLICATE);
    }

    @ExceptionHandler(IncorrectEmailOrPasswordException.class)
    public ResponseEntity<? extends ErrorResponse> handleDuplicateException(IncorrectEmailOrPasswordException e) {
        return handleExceptionInternal(HttpStatus.CONFLICT, UserErrorCode.INCORRECT_EMAIL_OR_PASSWORD);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<? extends ErrorResponse> handleIllegalArgumentException(IllegalArgumentException e) {
        log.warn("handleIllegalArgumentException", e);
        return handleExceptionInternal(HttpStatus.BAD_REQUEST, CommonErrorCode.ILLEGAL_ARGUMENT);
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<? extends ErrorResponse> handleAuthenticationException(AuthenticationException e) {
        log.warn("handleAuthenticationException", e);
        return handleExceptionInternal(HttpStatus.UNAUTHORIZED, CommonErrorCode.AUTHENTICATION_ERROR);
    }

    @ExceptionHandler(UnauthorizedException.class)
    public ResponseEntity<? extends ErrorResponse> handleUnauthorizedException(UnauthorizedException e) {
        log.warn("handleUnauthorizedException", e);
        return handleExceptionInternal(HttpStatus.FORBIDDEN, CommonErrorCode.UNAUTHORIZED_ERROR);
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<? extends ErrorResponse> handleNoSuchElementException(NoSuchElementException e) {
        return handleExceptionInternal(HttpStatus.NOT_FOUND, CommonErrorCode.RESOURCE_NOT_FOUND);
    }

    @ExceptionHandler(RedisException.class)
    public ResponseEntity<? extends ErrorResponse> handleRedisException(RedisException e) {
        return handleExceptionInternal(HttpStatus.SERVICE_UNAVAILABLE, CommonErrorCode.REDIS_SERVER_ERROR, e);
    }

    @ExceptionHandler({Exception.class})
    public ResponseEntity<? extends ErrorResponse> handleAllException(Exception e) {
        log.warn("handleAllException", e);
        return handleExceptionInternal(HttpStatus.INTERNAL_SERVER_ERROR, CommonErrorCode.INTERNAL_SERVER_ERROR, e);
    }

    private ResponseEntity<? extends ErrorResponse> handleExceptionInternal(HttpStatus httpStatus, ErrorCode errorCode) {
        return ResponseEntity.status(httpStatus)
                .body(ErrorResponse.of(errorCode.getStatusCode(), errorCode.getMessage()));
    }

    private ResponseEntity<? extends ErrorResponse> handleExceptionInternal(HttpStatus httpStatus, ErrorCode errorCode, Exception e) {
        return ResponseEntity.status(httpStatus)
                .body(ErrorResponse.of(errorCode.getStatusCode(), e.getMessage()));
    }

}
