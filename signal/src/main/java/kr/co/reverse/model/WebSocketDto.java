package kr.co.reverse.model;

import org.springframework.web.socket.WebSocketSession;

import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

public class WebSocketDto {
    private List<WebSocketSession> session;
    private ConcurrentHashMap<String, WebSocketSession> sessionMap;

    public List<WebSocketSession> getSession() {
        return session;
    }

    public ConcurrentHashMap<String, WebSocketSession> getSessionMap() {
        return sessionMap;
    }

    public WebSocketDto(List<WebSocketSession> session, ConcurrentHashMap<String, WebSocketSession> sessionMap) {
        this.session = session;
        this.sessionMap = sessionMap;
    }

    @Override
    public String toString() {
        return "\n\tWebSocketDto{" +
                "\n\t\tsession :" +
                "\n\t\t\t"+session +
                "\n\t\tsessionMap :" +
                "\n\t\t\t"+ sessionMap +
                "\n}\n";
    }
}
