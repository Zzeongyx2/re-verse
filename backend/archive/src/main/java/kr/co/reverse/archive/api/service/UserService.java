package kr.co.reverse.archive.api.service;


import kr.co.reverse.archive.api.request.AvatarReq;
import kr.co.reverse.archive.api.request.SigninUserReq;
import kr.co.reverse.archive.api.request.UserReq;
import kr.co.reverse.archive.api.response.UserRes;
import kr.co.reverse.archive.common.error.CommonErrorCode;
import kr.co.reverse.archive.common.exception.NicknameDuplicateException;
import kr.co.reverse.archive.common.exception.UnauthorizedException;
import kr.co.reverse.archive.db.entity.Archive;
import kr.co.reverse.archive.db.entity.Avatar;
import kr.co.reverse.archive.db.entity.User;
import kr.co.reverse.archive.db.repository.ArchiveRepository;
import kr.co.reverse.archive.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;
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

    private final ArchiveRepository archiveRepository;
    private final UserRepository userRepository;
    private final RedisService redisService;
    // private final UserSearchService userSearchService;

    public User getPlayer(String userId) {
        return userRepository.findById(UUID.fromString(userId)).get();
    }

    public String getUserId() {

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

    public String getUserIdByAuthId(String authId) {
        User user = userRepository.findUserByAuthId(authId);

        return user.getId().toString();
    }


    public boolean checkDuplicateNickname(String nickname) {
        User user = userRepository.findByNickname(nickname);

        if (user != null) {
            throw new NicknameDuplicateException();
        }

        return true;
    }

    @Transactional
    public void updateUser(String userId, UserReq userInfo) {
        User user = getPlayer(userId);

        user.setNickname(userInfo.getNickname());
        user.setMessage(userInfo.getMessage());

        // userSearchService.updateUser(user);

    }

    @Transactional
    public User createUser(SigninUserReq userInfo) {
        if (checkDuplicateNickname(userInfo.getNickname())) {
            User user = User.builder()
                    .authId(userInfo.getAuthId())
                    .nickname(userInfo.getNickname())
                    .avatar(Avatar.Cat)
                    .bestArchiveId(null)
                    .message("리버스로 놀러오세요 :)")
                    .createdTime(LocalDate.now())
                    .build();

            userRepository.save(user);
            // userSearchService.createUser(user);

            return user;
        }

        return null;
    }

    @Transactional
    public void changeAvatar(String userId, AvatarReq avatarInfo) {

        User user = getPlayer(userId);

        user.setAvatar(Avatar.valueOf(avatarInfo.getAvatar()));

        // userSearchService.updateAvatar(user);

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

        List<User> users = userRepository.findByNicknameContaining(nickname);

        return users;
    }

    public User getUserByNickname(String nickname) {
        return userRepository.findByNickname(nickname);
    }

    @Transactional
    public void updateBestArchive(String userId, String archiveId) {
        User user = userRepository.findById(UUID.fromString(userId))
                .orElseThrow(() -> new NoSuchElementException());

        if (archiveId != null) {
            Archive archive = archiveRepository.findById(UUID.fromString(archiveId))
                    .orElseThrow(() -> new NoSuchElementException());

            if (!user.getId().equals(archive.getOwnerId())) {
                throw new UnauthorizedException(CommonErrorCode.UNAUTHORIZED_ERROR);
            }
        }

        user.setBestArchiveId(archiveId);
    }

    public User getUserByAuthId(String authId) {
        return userRepository.findUserByAuthId(authId);
    }
}
