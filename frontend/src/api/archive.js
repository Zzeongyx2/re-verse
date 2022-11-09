import { apiInstance, fileApiInstance } from "./index";

const api = apiInstance();
const fileApi = fileApiInstance();

async function postArchive(archiveReq, success, fail) {
  await api.post(`/archive`, archiveReq).then(success).catch(fail);
}
async function getArchiveList(type, success, fail) {
  await api
    .get(`/archive`, { params: { type: type } })
    .then(success)
    .catch(fail);
}
async function deleteArchive(archiveId, success, fail) {
  await api.delete(`/archive/${archiveId}`).then(success).catch(fail);
}
async function editArchive(archiveId, editArchiveReq, success, fail) {
  await api.patch(`/archive/${archiveId}`, editArchiveReq).then(success).catch(fail);
}

export { postArchive, getArchiveList, deleteArchive, editArchive };
