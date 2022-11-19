// package kr.co.reverse.archive.api.service;

// import co.elastic.clients.elasticsearch.core.UpdateRequest;
// import kr.co.reverse.archive.db.entity.User;
// import kr.co.reverse.archive.db.entity.UserDocument;
// import kr.co.reverse.archive.db.repository.UserSearchRepository;
// import lombok.RequiredArgsConstructor;
// import org.elasticsearch.client.RequestOptions;
// import org.elasticsearch.client.RestHighLevelClient;
// import org.springframework.scheduling.annotation.Async;
// import org.springframework.stereotype.Service;
// import org.springframework.transaction.annotation.Transactional;

// import java.util.List;
// import java.util.Map;

// @Service
// @RequiredArgsConstructor
// public class UserSearchService {

//     private final UserSearchRepository userSearchRepository;

//     @Transactional
//     @Async
//     public void createUser(User user) {

//         UserDocument userDocument = UserDocument.builder()
//                 .userId(user.getId())
//                 .nickname(user.getNickname())
//                 .message(user.getMessage())
//                 .avatar(user.getAvatar())
//                 .build();

//         userSearchRepository.save(userDocument);

//     }

//     @Transactional
//     @Async
//     public void updateUser(User user){

// //        UserDocument userDocument = userSearchRepository.findByUserId(user.getId());
//         UserDocument userDocument = userSearchRepository.findById(user.getId()).get();

//         userDocument.setNickname(user.getNickname());
//         userDocument.setMessage(user.getMessage());

//         userSearchRepository.save(userDocument);


//     }

//     @Transactional
//     @Async
//     public void updateAvatar(User user){

// //        UserDocument userDocument = userSearchRepository.findByUserId(user.getId());
//         UserDocument userDocument = userSearchRepository.findById(user.getId()).get();

//         userDocument.setAvatar(user.getAvatar());

//         userSearchRepository.save(userDocument);

//     }

//     @Async
//     public void deleteUser(User user){

// //        UserDocument userDocument = userSearchRepository.findByUserId(user.getId());
//         UserDocument userDocument = userSearchRepository.findById(user.getId()).get();

//         userSearchRepository.delete(userDocument);

//     }

//     public List<UserDocument> searchUser(String nickname){
//         return userSearchRepository.findByNicknameContaining(nickname);
//     }
// }
