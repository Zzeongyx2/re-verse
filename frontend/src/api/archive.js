import { apiInstance } from "./index";

const api = apiInstance();

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
  await api
    .patch(`/archive/${archiveId}`, editArchiveReq)
    .then(success)
    .catch(fail);
}
async function getArchiveLike(success, fail) {
  await api.get(`/friend/bookmark`).then(success).catch(fail);
}
async function getLastArchive(success, fail) {
  await api.get(`/archive/last`).then(success).catch(fail);
}

export {
  postArchive,
  getArchiveList,
  deleteArchive,
  editArchive,
  getArchiveLike,
  getLastArchive,
};
