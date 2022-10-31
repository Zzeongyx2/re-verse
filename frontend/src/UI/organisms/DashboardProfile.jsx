import { useState, useEffect } from "react";

function ProfileTemp() {
  const [userInfo, setUserInfo] = useState({
    nickName: "Zl존윤sun",
    message: "늦었다고 생각할때가 진짜 너무 늦었다",
  });
  const [isEdited, setIsEdited] = useState(true);
  const [editNickName, setEditNickName] = useState("");
  const [editMessage, setEditMessage] = useState("");
  const [editNickNameValid, setEditNickNameValid] = useState({
    isValid: true,
    message: "",
  });

  useEffect(() => {
    //axios 요청으로 유저정보 가져오기
    //setUserInfo(response.data);
    setEditNickName(userInfo.nickName);
  }, []);

  const editNickNameHandleChange = (e) => {
    setEditNickName(e.target.value);
  };
  const editMessageHandleChange = (e) => {
    setEditMessage(e.target.value);
  };
  const editNickNameBlurHandle = (e) => {
    let nickNameRE = new RegExp("^[a-zA-Z0-9가-힣_]{2,12}$");
    if (!nickNameRE.test(editNickName)) {
      // TODO: 몇글자인지 정하기
      setEditNickNameValid({
        isValid: false,
        message: "*2~12글자 사이로 입력해주세요.",
      });
      return;
    }
    setEditNickNameValid({ isValid: true, message: "" });
    //axios 요청으로 닉네임 중복검사하기
    // setNickNameValid({ isValid: true, message: "이미 가입된 닉네임입니다." });
  };

  const handleSubmit = () => {
    // const editOnOff = () => {
    if (isEdited) {
      setEditNickName(userInfo.nickName);
      setEditMessage(userInfo.message);
    } else {
      if (editNickNameValid.isValid) {
        return;
      }
      changeProfile();
    }
    setIsEdited(!isEdited);
  };

  const changeProfile = async () => {
    //axios로 프로필 수정 요청 보내기
    setUserInfo({
      message: editMessage,
      nickName: editNickName,
      userImg: userInfo.userImg,
    });
  };

  const handleEnter = (e) => e.key === "Enter" && e.preventDefault();

  return (
    <div className="flex flex-col items-center w-full mt-28 border border-1 border-white rounded-2xl bg-white">
      {/* header */}
      <div className="flex justify-center items-center text-white w-full rounded-tl-2xl rounded-tr-2xl bg-gradient-to-t from-main1 to-sub1">
        <p className="text-2xl drop-shadow font-bold my-4">프로필</p>
      </div>
      <form
        onSubmit={handleSubmit}
        onKeyPress={handleEnter}
        className="flex flex-col w-full items-center"
      >
        <div className="w-11/12 my-3">
          {/* nickname */}
          <div>
            <input
              disabled={isEdited}
              type="text"
              placeholder="닉네임"
              value={editNickName}
              onChange={editNickNameHandleChange}
              onBlur={editNickNameBlurHandle}
              className={
                `h-12 focus:outline-none rounded-lg w-full px-3` +
                // editNickNameValid가 True이면 유효한거..
                (editNickNameValid.isValid
                  ? " border-2 border-base2/20"
                  : " border-2 border-red-500/80")
              }
            />
            <p className="text-red-500 ml-1 mt-1 text-[10px]">
              {editNickNameValid.message}
            </p>
          </div>
          {/* comments */}
          <div className="pt-2">
            {isEdited ? (
              <textarea
                disabled={isEdited}
                placeholder="상태 메세지를 입력하세요"
                className="w-full py-2 focus:outline-none rounded-lg resize-none mb-4 px-2 border-2 border-base2/20"
                name="comments"
                id="comments"
                rows="6"
                value={userInfo.message}
              ></textarea>
            ) : (
              <textarea
                disabled={!isEdited}
                placeholder="상태 메세지를 입력하세요"
                className="w-full py-2 focus:outline-none rounded-lg resize-none mb-4 px-2 border-2 border-base2/20"
                name="comments"
                id="comments"
                rows="6"
                onChange={editMessageHandleChange}
                value={editMessage}
              ></textarea>
            )}
          </div>
          {/* submit button */}
          <button
            type="submit"
            className="font-bold text-lg drop-shadow text-white bg-gradient-to-t from-extra1 to-extra2 h-14 w-full rounded-2xl "
          >
            {isEdited ? "편집 완료" : "편집 하기"}
          </button>
        </div>
      </form>
      {/* nickname input & comment input */}
      {/* {!edit ? (
        <div className="flex flex-col w-full items-center">
          <div className="w-11/12 my-3">
            <input
              type="text"
              placeholder="닉네임"
              className="w-full py-4 focus:outline-none rounded-lg shadow mb-4 px-2"
            />
          </div>
          <textarea
            placeholder="상태 메세지를 입력하세요"
            className="w-11/12 py-4 focus:outline-none rounded-lg resize-none shadow mb-4 px-2"
            rows={6}
            name="comments"
            id="comments"
          ></textarea>

          <div className="mb-6 w-11/12 h-16 flex items-center justify-center border border-1 border-white rounded-3xl bg-gradient-to-t from-extra1 to-extra2">
            <button
              onClick={() => {
                editOnOff();
              }}
              className="font-bold text-lg drop-shadow text-white "
            >
              편집 완료
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full items-center">
          <div className="w-11/12 my-3">
            <input
              type="text"
              placeholder="닉네임"
              className="w-full py-4 focus:outline-none rounded-lg shadow mb-4 px-2"
            />
          </div>
          <textarea
            placeholder="상태 메세지를 입력하세요"
            className="w-11/12 py-4 focus:outline-none rounded-lg resize-none shadow mb-4 px-2"
            rows={6}
            name="comments"
            id="comments"
          ></textarea>

          <div className="mb-6 w-11/12 h-16 flex items-center justify-center border border-1 border-white rounded-3xl bg-gradient-to-t from-extra1 to-extra2">
            <button
              onClick={() => {
                editOnOff();
              }}
              className="font-bold text-lg drop-shadow text-white "
            >
              편집 완료
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default ProfileTemp;

// import { useState, useEffect } from "react";

// function ProfileTest() {
//   const [userInfo, setUserInfo] = useState({
//     nickName: "Zl존윤sun",
//     message: "늦었다고 생각할때가 진짜 너무 늦었다",
//   });
//   const [isEdit, setIsEdit] = useState(false);
//   const [editNickName, setEditNickName] = useState("");
//   const [editMessage, setEditMessage] = useState("");
//   const [editNickNameValid, setEditNickNameValid] = useState({
//     isValid: false,
//     message: "",
//   });

//   useEffect(() => {
//     //axios 요청으로 유저정보 가져오기
//     //setUserInfo(response.data);
//     setEditNickName(userInfo.nickName);
//   }, []);

//   const editNickNameHandleChange = (e) => {
//     setEditNickName(e.target.value);
//   };
//   const ediMessageHandleChange = (e) => {
//     setEditMessage(e.target.value);
//   };
//   const editNickNameBlurHandle = (e) => {
//     let nickNameRE = new RegExp("^[a-zA-Z0-9가-힣_]{2,12}$");
//     if (!nickNameRE.test(editNickName)) {
//       // TODO: 몇글자인지 정하기
//       setEditNickNameValid({
//         isValid: true,
//         message: "*2~12글자 사이로 입력해주세요.",
//       });
//       return;    }
//     setEditNickNameValid({ isValid: false, message: "" });
//     //axios 요청으로 닉네임 중복검사하기
//     // setNickNameValid({ isValid: true, message: "이미 가입된 닉네임입니다." });
//   };

//   const editOnOff = () => {
//     if (!isEdit) {
//       setEditNickName(userInfo.nickName);
//       setEditMessage(userInfo.message);
//     } else {
//       if (editNickNameValid.isValid) {
//         return;
//       }
//       changeProfile();
//     }
//     setIsEdit(!isEdit);
//   };

//   const changeProfile = async () => {
//     //axios로 프로필 수정 요청 보내기
//     setUserInfo({
//       message: editMessage,
//       nickName: editNickName,
//       userImg: userInfo.userImg,
//     });
//   };

//   return (
//     <div className="flex flex-col items-center w-full mt-28 border border-1 border-white rounded-2xl bg-white">
//       {/* <div className="w-full mt-28 border border-1 border-white rounded-2xl bg-white grid grid-rows-4 grid-flow-col place-items-center"> */}
//       <div className="flex justify-center items-center text-white w-full rounded-tl-2xl rounded-tr-2xl bg-gradient-to-t from-main1 to-sub1">
//         <p className="text-2xl drop-shadow font-bold my-4">프로필</p>
//       </div>
//       <div className="flex flex-col w-full items-center">
//         <div className="w-11/12 my-3">
//           <input
//             type="text"
//             placeholder="닉네임"
//             className="w-full py-4 focus:outline-none rounded-lg shadow mb-4"
//           />
//         </div>
//         <textarea
//           placeholder="상태 메세지를 입력하세요"
//           className="w-11/12 py-4 focus:outline-none rounded-lg resize-none shadow mb-4"
//           rows={6}
//           name="comments"
//           id="comments"
//         ></textarea>

//         <div className="mb-6 w-11/12 h-16 flex items-center justify-center border border-1 border-white rounded-3xl bg-gradient-to-t from-extra1 to-extra2">
//           <button
//             onClick={() => {
//               editOnOff();
//             }}
//             className="font-bold text-lg drop-shadow text-white "
//           >
//             편집 완료
//           </button>
//         </div>
//       </div>

//       {/* <div className="grid grid-rows-1 grid-cols-5">
//         <div className="text-lg">{userInfo.nickName}</div>
//       </div> */}
//     </div>
//   );
// }

// export default ProfileTest;
