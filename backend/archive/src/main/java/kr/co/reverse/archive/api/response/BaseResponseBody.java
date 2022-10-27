package kr.co.reverse.archive.api.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BaseResponseBody {

    Integer statusCode = null;
    String message = null;

    public static BaseResponseBody of(Integer statusCode, String message){
        BaseResponseBody baseResponseBody = new BaseResponseBody();
        baseResponseBody.setStatusCode(statusCode);
        baseResponseBody.setMessage(message);
        return baseResponseBody;
    }
}
