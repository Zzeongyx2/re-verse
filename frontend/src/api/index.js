import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;
// axios 객체 생성
function apiInstance() {
  const instance = axios.create({
    baseURL: `${BASE_URL}/api/v1`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (error.response && error.response.status) {
        if (error.response.status === 401) {
          await instance
            .post("/auth/reissue")
            .then((res) => {
              window.location.reload();
            })
            .catch((error) => {
              console.log(error);
              window.location.href = "/login";
              alert("세션이 만료되었습니다. api/index 29줄");
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
    baseURL: `${BASE_URL}/api/v1`,
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
  return instance;
}

const s3Path =
  "https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/avatar/";

const imageForm = ".PNG";

export { apiInstance, fileApiInstance, s3Path, imageForm };
