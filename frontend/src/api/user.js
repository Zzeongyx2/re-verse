import { apiInstance } from "./index";

const api = apiInstance();

async function nicknameCheck(nickname, success, fail) {
  await api
    .get(`/user/compare`, { params: { nickname: nickname } })
    .then(success)
    .catch(fail);
}

async function getUserInfo(success, fail) {
  await api.get(`/user`).then(success).catch(fail);
}
async function editUserInfo(userInfo, success, fail) {
  await api.patch(`/user`, userInfo).then(success).catch(fail);
}
async function getAvatars(success, fail) {
  await api.get(`/user/avatar`).then(success).catch(fail);
}
async function editAvatar(avatar, success, fail) {
  await api.patch(`/user/avatar`, { avatar: avatar }).then(success).catch(fail);
}
async function editBestArchive(archiveId, success, fail) {
  await api
    .patch(`/user/archive`, { archiveId: archiveId })
    .then(success)
    .catch(fail);
}

export {
  nicknameCheck,
  getUserInfo,
  editUserInfo,
  getAvatars,
  editAvatar,
  editBestArchive,
};
