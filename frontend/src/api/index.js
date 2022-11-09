import axios from "axios";
import { reissue } from "./auth";

// axios 객체 생성

function apiInstance() {
  const instance = axios.create({
    baseURL: "https://re-verse.co.kr/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (error.response.status) {
        if (error.response.status == 401) {
          await instance
            .post("/auth/reissue")
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
              window.location.href = "/login";
            });
          return new Promise(() => {});
        }
      }
      console.log(error);
      return Promise.reject(error);
    }
  );
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
