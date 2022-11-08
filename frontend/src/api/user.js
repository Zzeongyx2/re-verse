import { apiInstance, fileApiInstance } from "./index";

const api = apiInstance();
const fileApi = fileApiInstance();

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

export { nicknameCheck, getUserInfo, editUserInfo };
