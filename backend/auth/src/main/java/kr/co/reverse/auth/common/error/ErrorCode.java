package kr.co.reverse.auth.common.error;


import org.springframework.http.HttpStatus;

public interface ErrorCode {

    int getStatusCode(); // 상태 코드

    String getMessage(); // 상태 메세지
}
