package kr.co.reverse.archive.common.response;

import lombok.*;

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
