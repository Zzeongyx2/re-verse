// package kr.co.reverse.archive.db.entity;

// import lombok.*;
// import org.springframework.data.annotation.Id;
// import org.springframework.data.elasticsearch.annotations.Document;
// import org.springframework.data.elasticsearch.annotations.Field;
// import org.springframework.data.elasticsearch.annotations.FieldType;
// import org.springframework.data.elasticsearch.annotations.Setting;

// import java.util.UUID;

// @NoArgsConstructor
// @AllArgsConstructor
// @Setter
// @Getter
// @Builder
// @Document(indexName = "user")
// //@Setting(settingPath = "user-setting.json")
// public class UserDocument {

//     @Id
//     @Field(type = FieldType.Keyword)
//     private UUID userId;

//     @Field(type = FieldType.Text)
//     private String nickname;

//     @Field(type = FieldType.Text)
//     private String message;

//     @Field(type = FieldType.Text)
//     private Avatar avatar;

// }
