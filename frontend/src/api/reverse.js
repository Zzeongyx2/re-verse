import { apiInstance, fileApiInstance } from "./index";

const api = apiInstance();
const fileApi = fileApiInstance();

async function getArchiveDetail(archiveId, success, fail) {
  await api.get(`/archive/${archiveId}`).then(success).catch(fail);
}

export { getArchiveDetail };
