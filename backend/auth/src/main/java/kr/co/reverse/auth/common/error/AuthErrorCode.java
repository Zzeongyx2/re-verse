package kr.co.reverse.auth.common.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum AuthErrorCode implements ErrorCode {
    NICKNAME_DUPLICATE(4091, "NICKNAME DUPLICATED"),
    INCORRECT_EMAIL_OR_PASSWORD(4010, "Authentication Fail: Incorrect Email or Password");

    private final int statusCode;
    private final String message;
}
