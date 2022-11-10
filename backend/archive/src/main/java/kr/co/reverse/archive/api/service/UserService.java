package kr.co.reverse.archive.api.service;


import kr.co.reverse.archive.api.request.AvatarReq;
import kr.co.reverse.archive.api.request.SigninUserReq;
import kr.co.reverse.archive.api.request.UserReq;
import kr.co.reverse.archive.common.exception.NicknameDuplicateException;
import kr.co.reverse.archive.db.entity.Avatar;
import kr.co.reverse.archive.db.entity.User;
import kr.co.reverse.archive.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Service
@RequiredArgsConstructor
public class UserService {

//    public static final String AUTHORIZATION_HEADER = "Authorization";
//    public static final String BEARER_PREFIX = "Bearer ";
    public static final String ACCESS_TOKEN = "accessToken";
    public static final String REFRESH_TOKEN = "refreshToken";
    private final UserRepository userRepository;
    private final RedisService redisService;
    private final UserSearchService userSearchService;

    public User getPlayer(String userId){
        return userRepository.findById(UUID.fromString(userId)).get();
    }

    public String getUserId(){

        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();

//        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        String bearerToken = null;
        Cookie[] cookies = request.getCookies();

        for(Cookie cookie : cookies){
            if(cookie.getName().equals(ACCESS_TOKEN)){
                bearerToken = cookie.getValue();
                break;
            }
        }

//        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_PREFIX)) {
//            bearerToken = bearerToken.substring(7);
//        }

        return redisService.getValues(bearerToken);

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

        userSearchService.updateUser(user);

    }

    @Transactional
    public void createUser(SigninUserReq userInfo) {

        if(checkDuplicateNickname(userInfo.getNickname())){

            User user = User.builder()
                    .authId(userInfo.getAuthId())
                    .nickname(userInfo.getNickname())
                    .avatar(Avatar.Cat)
                    .message("리버스로 놀러오세요 :)")
                    .createdTime(LocalDate.now())
                    .build();

            userRepository.save(user);

            //document에 저장
            userSearchService.createUser(user);
        }

    }

    @Transactional
    public void changeAvatar(String userId, AvatarReq avatarInfo) {

        User user = getPlayer(userId);

        user.setAvatar(Avatar.valueOf(avatarInfo.getAvatar()));

        userSearchService.updateAvatar(user);

    }

    public String getAuthIdByUserId(String userId) {
        User user = userRepository.findById(UUID.fromString(userId)).get();

        return user.getAuthId();
    }

    public List<String> getAvatars() {

        List<String> avatars = Stream.of(Avatar.values())
                .map(Enum::toString)
                .collect(Collectors.toList());

        return avatars;

    }

    public List<User> getUsers(String nickname) {

        //        userSearchRepository.findByNickname(nickname).stream().map(UserDocument::from).collect(Collectors.toList());


        return userRepository.findByNicknameContaining(nickname);
    }

    public User getUserByAuthId(String authId) {
        return userRepository.findUserByAuthId(authId);
    }
}
