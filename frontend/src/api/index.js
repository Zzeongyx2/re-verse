import axios from "axios";

// axios 객체 생성

function apiInstance() {
  const instance = axios.create({
    baseURL: "https://re-verse.co.kr/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return instance;
}

function fileApiInstance() {
  const instance = axios.create({
    baseURL: "https://re-verse.co.kr/api/v1",
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
  return instance;
}

const s3Path = "https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/avatar/";

const imageForm = ".PNG";

export { apiInstance, fileApiInstance, s3Path, imageForm };
