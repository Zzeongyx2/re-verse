package kr.co.reverse.auth.common.util;

import org.springframework.stereotype.Component;

import javax.servlet.http.Cookie;

@Component
public class CookieUtil {

    private static final int ACCESS_TOKEN_EXPIRE_TIME = 7 * 24 * 60 * 1000;
    private static final int REFRESH_TOKEN_EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000;
    public Cookie addRefreshCookie(String refreshToken) {
        Cookie cookie = new Cookie("refreshToken", refreshToken);
        cookie.setMaxAge(REFRESH_TOKEN_EXPIRE_TIME);
        cookie.setSecure(false);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        return cookie;
    }

    public Cookie addAccessCookie(String accessToken) {
        Cookie accessCookie = new Cookie("accessToken", accessToken);
        accessCookie.setMaxAge(ACCESS_TOKEN_EXPIRE_TIME);
        accessCookie.setSecure(false);
        accessCookie.setHttpOnly(true);
        accessCookie.setPath("/");
        return accessCookie;
    }
}
