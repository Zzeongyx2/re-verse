import { useState, useEffect } from "react";

function LobbyProfile() {
  const initialUserInfo = {
    nickname: "zl존윤sun",
    message: "늦었다고 생각할 때가 진짜 너무 늦었다",
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);
  console.log(userInfo);
  // edit ? "편집하는 중!" : "편집 안하는 중"
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // 유효성 검사
  const [isValid, setIsValid] = useState({
    valid: true,
    message: "",
  });
  const handleBlur = (e) => {
    let nickNameRE = new RegExp("^[a-zA-Z0-9가-힣_]{2,12}$");
    if (!nickNameRE.test(userInfo.nickname)) {
      setIsValid({
        valid: false,
        message: "*2~12글자 사이로 입력해주세요",
      });
      console.log(isValid.message);
      return;
    }
    setIsValid({ valid: true, message: "" });
    //axios 요청으로 닉네임 중복검사하기
    // setNickNameValid({ isValid: true, message: "이미 가입된 닉네임입니다." });
  };

  return (
    <div className="flex flex-col items-center w-full mt-28 border border-1 border-white rounded-2xl bg-white">
      {/* header */}
      <div className="flex justify-center items-center w-full rounded-tl-2xl rounded-tr-2xl bg-gradient-to-t from-main1 to-sub1">
        <p className="text-2xl drop-shadow font-bold my-4 text-white">프로필</p>
      </div>
      {/* profile contents */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-center"
      >
        {/* nickname */}
        <div className="w-11/12 my-3">
          <div>
            <input
              disabled={!edit}
              type="text"
              placeholder="닉네임"
              name="nickname"
              value={userInfo.nickname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                `h-12 focus:outline-none rounded-lg w-full px-3 border-2` +
                (isValid.valid ? " border-base2/20" : " border-red-500/80")
              }
            />
            <p className="text-red-500 ml-1 mt-1 text-[10px]">
              {isValid.message}
            </p>
          </div>
          {/* comments */}
          <div>
            <textarea
              disabled={!edit}
              name="message"
              value={userInfo.message}
              id="message"
              rows="6"
              placeholder="상태 메세지를 입력하세요"
              className="pt-2 w-full py-2 focus:outline-none rounded-lg resize-none mb-4 px-2 border-2 border-base2/20"
              onChange={handleChange}
            ></textarea>
          </div>
          {/* submit button */}
          {edit && (
            <button
              type="submit"
              onClick={() => setEdit(false)}
              className="font-bold text-lg drop-shadow text-white bg-gradient-to-t from-extra1 to-extra2 h-14 w-full rounded-2xl"
            >
              편집 완료
            </button>
          )}
          {!edit && (
            <button
              onClick={() => setEdit(true)}
              className="font-bold text-lg drop-shadow text-white bg-gradient-to-t from-extra1 to-extra2 h-14 w-full rounded-2xl"
            >
              프로필 편집
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default LobbyProfile;
