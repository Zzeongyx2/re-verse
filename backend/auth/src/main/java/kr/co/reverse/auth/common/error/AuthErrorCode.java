package kr.co.reverse.auth.common.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum AuthErrorCode implements ErrorCode {

    EXPIRE_TOKEN(4020, "EXPIRED TOKEN");


    private final int statusCode;
    private final String message;
}
