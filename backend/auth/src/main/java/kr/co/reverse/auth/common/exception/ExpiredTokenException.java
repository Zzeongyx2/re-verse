package kr.co.reverse.auth.common.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Getter
@RequiredArgsConstructor
@Component
public class ExpiredTokenException extends RuntimeException {
}
