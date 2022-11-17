package kr.co.reverse.archive.api.response;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class UserDetailRes {
    private UUID userId = null;

    private String nickname;

    private String message;

    private String avatar;

    private String bestArchiveId;

    @Builder
    public UserDetailRes(UUID userId, String nickname, String message, String avatar, String bestArchiveId) {
        this.userId = userId;
        this.nickname = nickname;
        this.message = message;
        this.avatar = avatar;
        this.bestArchiveId = bestArchiveId;
    }
}
