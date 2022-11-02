package kr.co.reverse.archive.api.service;


import kr.co.reverse.archive.common.exception.NicknameDuplicateException;
import kr.co.reverse.archive.db.entity.User;
import kr.co.reverse.archive.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.StringTokenizer;


@Service
@RequiredArgsConstructor
public class UserService {

    public static final String AUTHORIZATION_HEADER = "Authorization";
    public static final String BEARER_PREFIX = "Bearer ";
    private final UserRepository userRepository;
    private final RedisService redisService;

    public User getPlayer(String id){
        return userRepository.findById(id).get();
    }

    public String getUserId(){

        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();

        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_PREFIX)) {
            bearerToken = bearerToken.substring(7);
        }

        String userId = redisService.getValues(bearerToken);

        return userId;

    }


    public void checkDuplicateNickname(String nickname) {
        User user = userRepository.findByNickname(nickname);

        if(user != null){
            throw new NicknameDuplicateException();
        }
    }
}
