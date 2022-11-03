package kr.co.reverse.archive.api.service;


import kr.co.reverse.archive.api.request.AvatarReq;
import kr.co.reverse.archive.api.request.SigninUserReq;
import kr.co.reverse.archive.api.request.UserReq;
import kr.co.reverse.archive.common.exception.NicknameDuplicateException;
import kr.co.reverse.archive.db.entity.User;
import kr.co.reverse.archive.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class UserService {

    public static final String AUTHORIZATION_HEADER = "Authorization";
    public static final String BEARER_PREFIX = "Bearer ";
    private final UserRepository userRepository;
    private final RedisService redisService;

    public User getPlayer(String userId){
        return userRepository.findById(UUID.fromString(userId)).get();
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

    public String getUserIdByAuthId(String authId){
        User user = userRepository.findUserByAuthId(authId);

        return user.getId().toString();
    }


    public boolean checkDuplicateNickname(String nickname) {
        User user = userRepository.findByNickname(nickname);

        if(user != null){
            throw new NicknameDuplicateException();
        }

        return true;
    }
    @Transactional
    public void updateUser(String userId, UserReq userInfo) {
        User user = getPlayer(userId);

        user.setNickname(userInfo.getNickname());
        user.setMessage(userInfo.getMessage());

    }

    @Transactional
    public void createUser(SigninUserReq userInfo) {

        if(checkDuplicateNickname(userInfo.getNickname())){
            User user = User.builder()
                    .authId(userInfo.getAuthId())
                    .nickname(userInfo.getNickname())
                    .avatar(1)
                    .message("리버스로 놀러오세요 :)")
                    .createdTime(LocalDate.now())
                    .build();

            userRepository.save(user);
        }

    }

    @Transactional
    public void changeAvatar(String userId, AvatarReq avatarInfo) {

        User user = getPlayer(userId);

        user.setAvatar(avatarInfo.getAvatar());

    }
}
