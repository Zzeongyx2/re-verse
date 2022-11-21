import { apiInstance } from "./index";

const api = apiInstance();

async function deleteFriend(nickname, success, fail) {
  await api
    .delete(`/friend`, { params: { nickname: nickname } })
    .then(success)
    .catch(fail);
}
async function getFriendList(success, fail) {
  await api.get(`/friend`).then(success).catch(fail);
}
async function requestFriend(nickname, success, fail) {
  await api.post(`/friend`, { nickname: nickname }).then(success).catch(fail);
}
async function searchUser(nickname, success, fail) {
  await api
    .get(`/user/search`, { params: { nickname: nickname } })
    .then(success)
    .catch(fail);
}
async function acceptFriend(acceptRequest, success, fail) {
  await api.post(`/friend/reply`, acceptRequest).then(success).catch(fail);
}
async function getAcceptFriendList(success, fail) {
  await api.get(`/friend/reply`).then(success).catch(fail);
}
async function getFriendArchiveList(nickname, success, fail) {
  await api
    .get(`/friend/archive-member`, { params: { nickname: nickname } })
    .then(success)
    .catch(fail);
}
async function postBookmark(archiveId, success, fail) {
  await api
    .post(`/friend/bookmark`, { archiveId: archiveId })
    .then(success)
    .catch(fail);
}
async function deleteBookmark(archiveId, success, fail) {
  await api.delete(`/friend/bookmark/${archiveId}`).then(success).catch(fail);
}
async function deleteArchiveMember(archiveId, nickname, success, fail) {
  await api
    .delete(`/friend/archive-member/${archiveId}`, {
      params: { nickname: nickname },
    })
    .then(success)
    .catch(fail);
}
async function createArchiveMember(archiveId, nickname, success, fail) {
  await api
    .post(`/friend/archive-member`, {
      archiveId: archiveId,
      nickname: nickname,
      role: "READ",
    })
    .then(success)
    .catch(fail);
}

export {
  deleteFriend,
  getFriendList,
  requestFriend,
  searchUser,
  acceptFriend,
  getAcceptFriendList,
  getFriendArchiveList,
  postBookmark,
  deleteBookmark,
  deleteArchiveMember,
  createArchiveMember,
};
