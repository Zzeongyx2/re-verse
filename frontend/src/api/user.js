import { apiInstance, fileApiInstance } from "./index";

const api = apiInstance();
const fileApi = fileApiInstance();

async function nicknameCheck(nickname, success, fail) {
  await api.get(`/user/${nickname}`).then(success).catch(fail);
}

export { nicknameCheck };
