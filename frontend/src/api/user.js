import { apiInstance, fileApiInstance } from "./index";

const api = apiInstance();
const fileApi = fileApiInstance();

async function nicknameCheck(nickname, success, fail) {
  await api.get(`/user/${nickname}`).then(success).catch(fail);
}

async function getUserInfo(success, fail) {
  await api
    .get(`/user`, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
    .then(success)
    .catch(fail);
}
async function editUserInfo(userInfo, success, fail) {
  await api
    .patch(`/user`, userInfo, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
    .then(success)
    .catch(fail);
}

export { nicknameCheck, getUserInfo, editUserInfo };
