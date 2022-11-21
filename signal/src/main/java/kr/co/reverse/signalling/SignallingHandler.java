package kr.co.reverse.signalling;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

import kr.co.reverse.model.WebSocketDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import kr.co.reverse.model.SignalData;
import kr.co.reverse.model.SignalType;


public class SignallingHandler extends TextWebSocketHandler {


    Set<WebSocketSession> sessions = new HashSet<WebSocketSession>();
    Map<String, ConcurrentHashMap<String, WebSocketSession>> archiveMap=new HashMap<>();
    final ObjectMapper map1 = new ObjectMapper();
    Logger log1 = LoggerFactory.getLogger(SignallingHandler.class);

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        System.out.println("this archive : "+archiveMap.toString());
        System.out.println("this archive's size : "+archiveMap.size());
        final String msg1 = message.getPayload();
        SignalData sigData = map1.readValue(msg1, SignalData.class);
        log1.debug("Receive message from client:", msg1);
        String archive= sigData.getArchivId();
        if(!archiveMap.containsKey(archive)){
            archiveMap.put(archive, new ConcurrentHashMap<String, WebSocketSession>());
        }
        ConcurrentHashMap<String, WebSocketSession> sessionMap=archiveMap.get(archive);

        SignalData sigResp = new SignalData();
        if (sigData.getType().equalsIgnoreCase(SignalType.Login.toString())) {
            System.out.println("\there is login phase");

            SignalData sigResp2 = new SignalData();
            String userId = UUID.randomUUID().toString();
            sigResp2.setUserId("signaling");
            sigResp2.setType(SignalType.UserId.toString());
            sigResp2.setData(userId);
            synchronized (sessionMap) {
                session.getAttributes().put("archive", archive);
                session.getAttributes().put("uuid", userId);
            }
            sessionMap.put(userId, session);
            session.sendMessage(new TextMessage(map1.writeValueAsString(sigResp2)));
        } else if (sigData.getType().equalsIgnoreCase(SignalType.NewMember.toString())) {
            System.out.println("\there is new member phase");
            sessionMap.values().forEach(a -> {
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
            System.out.println("\there is offer phase");
            sigResp = new SignalData();
            sigResp.setUserId(sigData.getUserId());
            sigResp.setType(SignalType.Offer.toString());
            sigResp.setData(sigData.getData());
            sigResp.setToUid(sigData.getToUid());
            synchronized (sessionMap) {
                sessionMap.get(sigData.getToUid()).sendMessage(new TextMessage(map1.writeValueAsString(sigResp)));
            }

        } else if (sigData.getType().equalsIgnoreCase(SignalType.Answer.toString())) {
            System.out.println("\there is answer phase");
            sigResp = new SignalData();
            sigResp.setUserId(sigData.getUserId());
            sigResp.setType(SignalType.Answer.toString());
            sigResp.setData(sigData.getData());
            sigResp.setToUid(sigData.getToUid());
            synchronized (sessionMap) {
                sessionMap.get(sigData.getToUid()).sendMessage(new TextMessage(map1.writeValueAsString(sigResp)));
            }

        } else if (sigData.getType().equalsIgnoreCase(SignalType.Ice.toString())) {
            System.out.println("\there is ice phase");
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
        System.out.println("after connection established");
        sessions.add(session);
        super.afterConnectionEstablished(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("after connection closed");
        archiveMap.get(session.getAttributes().get("archive")).remove(session.getAttributes().get("uuid"));
        sessions.remove(session);
        super.afterConnectionClosed(session, status);
    }
}
