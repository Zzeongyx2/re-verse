import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

function SelectCharacterBtn({ imgUrl, name, selected }) {
  return (
    <>
      <div className="cursor-pointer aspect-square overflow-hidden rounded-2xl shadow border-4 border-sub1 w-20 h-20 scale-[0.8] hover:scale-[0.85]  transition hover:duration-500">
        <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      {/* <div>
        <Avatar
          size="xl"
          alt={name}
          src={imgUrl}
          className="cursor-pointer hover:scale-105 hover:duration-300"
        />
      </div> */}
    </>
    // <button>
    //   <img
    //     src={imgUrl}
    //     alt={name}
    //     className="w-20 h-20 object-cover rounded-full p-1"
    //   />
    // </button>
  );
}

export default SelectCharacterBtn;
