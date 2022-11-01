import SelectCharacterBtn from "../atoms/SelectCharacterBtn";

function SelectCharacter() {
  return (
    <div className="text-base2">
      {/* <div>select character!</div> */}
      <div className="flex justify-between">
        {/* 캐릭터 렌더링 */}
        <div className="bg-white rounded-3xl w-[calc(96%/3)] pt-5 pb-6"></div>
        {/* 캐릭터 선택 창 */}
        <div className="flex flex-col bg-white rounded-3xl w-[calc(96%/3*2)] pb-6">
          <div className="flex justify-center items-center w-full rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-main1 to-sub1">
            <p className="text-2xl drop-shadow font-bold my-4 text-white">
              프로필
            </p>
          </div>
          <div className="flex justify-between">
            {/* {characters.map((character, idx) => {
              return (
                <SelectCharacterBtn
                  imgUrl={character.imgUrl}
                  name={character.name}
                  key={idx}
                />
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

const characters = [
  {
    name: "잘나가는 초록괴물",
    imgUrl:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    name: "졸려서생각안남",
    imgUrl:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    name: "잘나가는 초록괴물",
    imgUrl:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    name: "졸려서생각안남",
    imgUrl:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    name: "잘나가는 초록괴물",
    imgUrl:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    name: "졸려서생각안남",
    imgUrl:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    name: "잘나가는 초록괴물",
    imgUrl:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    name: "졸려서생각안남",
    imgUrl:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    name: "잘나가는 초록괴물",
    imgUrl:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    name: "졸려서생각안남",
    imgUrl:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    name: "잘나가는 초록괴물",
    imgUrl:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    name: "졸려서생각안남",
    imgUrl:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
];

export default SelectCharacter;
