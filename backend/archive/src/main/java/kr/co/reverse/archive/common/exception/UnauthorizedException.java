package kr.co.reverse.archive.common.exception;

import kr.co.reverse.archive.common.error.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class UnauthorizedException extends RuntimeException {

    private final ErrorCode errorCode;
}
