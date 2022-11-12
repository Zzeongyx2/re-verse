import { apiInstance, fileApiInstance } from "./index";

const api = apiInstance();
const fileApi = fileApiInstance();

async function getArchiveDetail(archiveId, success, fail) {
  await api.get(`/archive/${archiveId}`).then(success).catch(fail);
}

// 글 하나 보기
async function getPaper(archiveId, stuffId, paperId, success, fail) {
  await api
    .get(`/archive/${archiveId}/stuff/${stuffId}/paper/${paperId}`)
    .then(success)
    .catch(fail);
}

// 글 하나 생성
async function postPaper(archiveId, stuffId, reverseReq, success, fail) {
  await api
    .post(`/archive/${archiveId}/stuff/${stuffId}/paper`, reverseReq)
    .then(success)
    .catch(fail);
}

// async function postPaper()

// 글 하나 수정
async function editPaper(archiveId, stuffId, success, fail) {
  await api
    .patch(`/archive/${archiveId}/stuff/${stuffId}/paper`)
    .then(success)
    .catch(fail);
}

// 글 하나 삭제
async function deletePaper(archiveId, stuffId, paperId, success, fail) {
  await api
    .delete(`/archive/${archiveId}/stuff/${stuffId}/paper/${paperId}`)
    .then(success)
    .catch(fail);
}

export { getArchiveDetail, getPaper, postPaper, editPaper, deletePaper };
