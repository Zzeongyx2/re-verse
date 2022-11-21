import { apiInstance } from "./index";

const api = apiInstance();

async function signin(authInfo, success, fail) {
  await api.post("/auth/sign-up", authInfo).then(success).catch(fail);
}

async function emailCheck(email, success, fail) {
  await api
    .get(`/auth/compare`, {
      params: {
        email: email,
      },
    })
    .then(success)
    .catch(fail);
}

async function login(loginInfo, success, fail) {
  await api.post("/auth/login", loginInfo).then(success).catch(fail);
}
async function logout(success, fail) {
  await api.get("/auth/logout").then(success).catch(fail);
}

export { signin, emailCheck, login, logout };
