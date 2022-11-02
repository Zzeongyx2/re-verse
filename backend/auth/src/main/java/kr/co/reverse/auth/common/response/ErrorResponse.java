package kr.co.reverse.auth.common.response;

import kr.co.reverse.auth.common.error.AuthErrorCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErrorResponse {
    private Integer statusCode;
    private String message;

    public static ErrorResponse of(Integer statusCode, String message) {
        ErrorResponse res = new ErrorResponse();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        return res;
    }
}

