// import { useEffect, useState } from "react";
// import { editAvatar, getAvatars } from "../../api/user";

import CharacterThree from "./CharacterThree";
// import { useSelector, useDispatch } from "react-redux";
// import { setLoginUser } from "../../modules/user";

function SelectCharacter() {
  // const [mine, setMine] = useState(initialData);
  // const mine = useSelector((state) => state.user.loginUser);
  // const dispatch = useDispatch();
  // // const [ischecked, setIschecked] = useState(false);
  // const [selectCharacter, setSelectCharacter] = useState("");
  // const [characters, setCharacters] = useState([]);

  // // const handleChange = (e) => {
  // //   console.log(e.target.value);
  // //   setSelectCharacter(e.target.value);
  // //   setIschecked((prev) => !prev);
  // // };
  // useEffect(() => {
  //   getAvatars(getAvatarsSuccess, getAvatarsFail);
  //   setSelectCharacter(mine.avatar);
  // }, []);
  // const getAvatarsSuccess = (res) => {
  //   setCharacters(res.data.avatars);
  // };
  // const getAvatarsFail = (error) => {
  //   console.log(error);
  // };

  // const clickEditBtn = () => {
  //   editAvatar(selectCharacter, editAvatarSuccess, editAvatarFail);
  // };
  // const editAvatarSuccess = (res) => {
  //   console.log(res);
  //   dispatch(setLoginUser({ ...mine, avatar: selectCharacter }));
  // };
  // const editAvatarFail = (error) => {
  //   console.log(error);
  // };
  return (
    <div className="text-base2">
      {/* <div>select character!</div> */}
      <div className="rounded-3xl w-full h-[calc(100vh-200px)] border border-white">
        <CharacterThree />
        {/* <div className="text-white text-3xl">hi?</div> */}
      </div>
    </div>
  );
}

export default SelectCharacter;
