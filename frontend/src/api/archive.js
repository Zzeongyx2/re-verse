import { apiInstance, fileApiInstance } from "./index";

const api = apiInstance();
const fileApi = fileApiInstance();

async function postArchive(success, fail) {
  await api.post(`/archive`).then(success).catch(fail);
}
async function getFriendArchiveList(success, fail) {
  await api.post(`/archive`).then(success).catch(fail);
}

export { postArchive };
