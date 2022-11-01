package kr.co.reverse.signalling;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

import kr.co.reverse.model.WebSocketDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import kr.co.reverse.model.SignalData;
import kr.co.reverse.model.SignalType;


public class SignallingHandler extends TextWebSocketHandler {

    Map<String, WebSocketDto> archiveMap = new HashMap<>();
    String archive="";
    final ObjectMapper map1 = new ObjectMapper();
    Logger log1 = LoggerFactory.getLogger(SignallingHandler.class);

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        System.out.println("is packet arrived?");
        final String msg1 = message.getPayload();
        System.out.println(msg1);
        SignalData sigData = map1.readValue(msg1, SignalData.class);
        archive = sigData.getArchive();
        log1.debug("Receive message from client:", msg1);
        if (!archiveMap.containsKey(archive)) {
            archiveMap.put(archive, new WebSocketDto(new LinkedList<>(),new ConcurrentHashMap<>()));
        }
        List<WebSocketSession> sessions = archiveMap.get(archive).getSession();
        ConcurrentHashMap<String, WebSocketSession> sessionMap=archiveMap.get(archive).getSessionMap();
        SignalData sigResp = new SignalData();
        if (sigData.getType().equalsIgnoreCase(SignalType.Login.toString())) {
            SignalData sigResp2 = new SignalData();
            String userId = UUID.randomUUID().toString();
            sigResp2.setUserId("signaling");
            sigResp2.setType(SignalType.UserId.toString());
            sigResp2.setData(userId);
            sessionMap.put(userId, session);
            session.sendMessage(new TextMessage(map1.writeValueAsString(sigResp2)));
            return;
        } else if (sigData.getType().equalsIgnoreCase(SignalType.NewMember.toString())) {
            sessionMap.values().forEach(a -> {
                System.out.println(a.toString());
                SignalData sigResp2 = new SignalData();
                sigResp2.setUserId(sigData.getUserId());
                sigResp2.setType(SignalType.NewMember.toString());
                try {
                    //Check if websocket is open
                    if (a.isOpen()) {
                        log1.debug("Sending New Member from", sigData.getUserId());
                        a.sendMessage(new TextMessage(map1.writeValueAsString(sigResp2)));
                    }
                } catch (Exception e) {
                    log1.error("Error Sending message:", e);
                }
            });
        } else if (sigData.getType().equalsIgnoreCase(SignalType.Offer.toString())) {
            sigResp = new SignalData();
            sigResp.setUserId(sigData.getUserId());
            sigResp.setType(SignalType.Offer.toString());
            sigResp.setData(sigData.getData());
            sigResp.setToUid(sigData.getToUid());
            synchronized (sessionMap) {
                sessionMap.get(sigData.getToUid()).sendMessage(new TextMessage(map1.writeValueAsString(sigResp)));
            }
        } else if (sigData.getType().equalsIgnoreCase(SignalType.Answer.toString())) {
            sigResp = new SignalData();
            sigResp.setUserId(sigData.getUserId());
            sigResp.setType(SignalType.Answer.toString());
            sigResp.setData(sigData.getData());
            sigResp.setToUid(sigData.getToUid());
            synchronized (sessionMap) {
                sessionMap.get(sigData.getToUid()).sendMessage(new TextMessage(map1.writeValueAsString(sigResp)));
            }
        } else if (sigData.getType().equalsIgnoreCase(SignalType.Ice.toString())) {
            sigResp = new SignalData();
            sigResp.setUserId(sigData.getUserId());
            sigResp.setType(SignalType.Ice.toString());
            sigResp.setData(sigData.getData());
            sigResp.setToUid(sigData.getToUid());
            synchronized (sessionMap) {
                sessionMap.get(sigData.getToUid()).sendMessage(new TextMessage(map1.writeValueAsString(sigResp)));
            }
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        archiveMap.get(archive).getSession().add(session);
        System.out.println("after add : " + archiveMap.get(archive).getSession().toString());
        super.afterConnectionEstablished(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        archiveMap.get(archive).getSession().remove(session);
        System.out.println("after remove : " + archiveMap.get(archive).getSession().toString());
        super.afterConnectionClosed(session, status);
    }
}
