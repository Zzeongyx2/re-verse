package kr.co.reverse.auth.api.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BaseResponseBody {

    String message = null;

    Integer statusCode = null;

    public static BaseResponseBody of(Integer statusCode, String message) {
        BaseResponseBody body = new BaseResponseBody();
        body.message = message;
        body.statusCode = statusCode;
        return body;
    }
}

