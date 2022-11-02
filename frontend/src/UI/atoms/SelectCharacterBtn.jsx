import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

function SelectCharacterBtn({ imgUrl, name, selected }) {
  return (
    <>
      <div>
        <Avatar
          size="xl"
          alt={name}
          src={imgUrl}
          className="cursor-pointer hover:scale-105 hover:duration-300"
        />
      </div>
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
