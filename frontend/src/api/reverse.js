import { apiInstance } from "./index";

const api = apiInstance();

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
async function editPaper(archiveId, stuffId, paperId, editReq, success, fail) {
  await api
    .patch(`/archive/${archiveId}/stuff/${stuffId}/paper/${paperId}`, editReq)
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

// 물건 상세 조회
async function getStuffDetail(archiveId, stuffId, success, fail) {
  await api
    .get(`/archive/${archiveId}/stuff/${stuffId}`)
    .then(success)
    .catch(fail);
}

export {
  getArchiveDetail,
  getPaper,
  postPaper,
  editPaper,
  deletePaper,
  getStuffDetail,
};
