import { apiInstance, fileApiInstance } from "./index";

const api = apiInstance();
const fileApi = fileApiInstance();

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

export {
  deleteFriend,
  getFriendList,
  requestFriend,
  searchUser,
  acceptFriend,
  getAcceptFriendList,
};
