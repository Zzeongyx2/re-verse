package kr.co.reverse.auth.common.util;

import org.springframework.stereotype.Component;

import javax.servlet.http.Cookie;

@Component
public class CookieUtil {

    private static final long ACCESS_TOKEN_EXPIRE_TIME = 30 * 60 * 1000L;
    private static final long REFRESH_TOKEN_EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000L;
    public Cookie addRefreshCookie(String refreshToken) {
        Cookie cookie = new Cookie("refreshToken", refreshToken);
        cookie.setMaxAge(86400 * 1000);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        return cookie;
    }

    public Cookie addAccessCookie(String accessToken) {
        Cookie accessCookie = new Cookie("accessToken", accessToken);
        accessCookie.setMaxAge((int)System.currentTimeMillis() * 1800 * 1000);
        accessCookie.setSecure(true);
        accessCookie.setHttpOnly(true);
        accessCookie.setPath("/");
        return accessCookie;
    }
}
