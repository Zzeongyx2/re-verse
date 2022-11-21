package kr.co.reverse.model;

public class SignalData {

    private String userId, type, data, toUid, archiveId;


    public String getToUid() {
        return toUid;
    }

    public void setToUid(String toUid) {
        this.toUid = toUid;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getArchivId() {
        return archiveId;
    }

    public void setArchiveId(String archive) {
        this.archiveId = archive;
    }


}
