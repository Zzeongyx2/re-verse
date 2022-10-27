package kr.co.reverse.archive.common.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CommonErrorCode implements ErrorCode {

    ILLEGAL_FORMAT(4000, "Bad Request: Incorrect Format"),
    AUTHENTICATION_ERROR(4011, "Authentication Fail: Login Required"),
    NOT_AUTHORIZED_ERROR(4030, "Forbidden: Not Authorized to Access"),
    RESOURCE_NOT_FOUND(4040, "Resource Not Exists");

    private final int statusCode;
    private final String message;
}
