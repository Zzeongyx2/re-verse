package kr.co.reverse.archive.common.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CommonErrorCode implements ErrorCode {
    ILLEGAL_ARGUMENT(4000, "Bad Request: Illegal Argument"),
    AUTHENTICATION_ERROR(4011, "Authentication Fail: Login Required"),
    UNAUTHORIZED_ERROR(4030, "Forbidden: Not Authorized to Access"),
    RESOURCE_NOT_FOUND(4040, "Resource Not Exists"),
    INTERNAL_SERVER_ERROR(5000, "Internal Server Error"),
    REDIS_SERVER_ERROR(5030, "Redis Server Error");

    private final int statusCode;
    private final String message;
}
