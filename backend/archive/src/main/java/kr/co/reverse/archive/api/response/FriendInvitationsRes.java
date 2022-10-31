package kr.co.reverse.archive.api.response;

import kr.co.reverse.archive.db.entity.FriendInvitation;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class FriendInvitationsRes {

    private List<FriendInvitationRes> waitingTo = new ArrayList<>();
    private List<FriendInvitationRes> waitingFrom = new ArrayList<>();

    public static FriendInvitationsRes of(List<FriendInvitationRes> waitingTo, List<FriendInvitationRes> waitingFrom){

        FriendInvitationsRes friendInvitationsRes = new FriendInvitationsRes();
        friendInvitationsRes.waitingTo = waitingTo;
        friendInvitationsRes.waitingFrom = waitingFrom;

        return friendInvitationsRes;
    }

}
