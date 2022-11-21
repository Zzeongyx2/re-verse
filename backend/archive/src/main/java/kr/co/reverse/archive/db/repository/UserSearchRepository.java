// package kr.co.reverse.archive.db.repository;

// import co.elastic.clients.elasticsearch.core.IndexRequest;
// import kr.co.reverse.archive.db.entity.Avatar;
// import kr.co.reverse.archive.db.entity.User;
// import kr.co.reverse.archive.db.entity.UserDocument;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;
// import org.springframework.data.elasticsearch.core.query.UpdateQuery;
// import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
// import org.springframework.data.jpa.repository.Query;

// import java.util.List;
// import java.util.UUID;

// public interface UserSearchRepository extends ElasticsearchRepository<UserDocument, UUID> {

//     List<UserDocument> findByNicknameContaining(String nickname);

// //    UserDocument findByUserId(UUID userId);

// }
