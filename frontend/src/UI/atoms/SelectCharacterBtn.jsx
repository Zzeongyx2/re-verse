import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const superLg = defineStyle({
  width: 40,
  height: 40,
  fontSize: "6xl",
});

const sizes = {
  superLg: definePartsStyle({ container: superLg }),
};

export const avatarTheme = defineMultiStyleConfig({ sizes });

function SelectCharacterBtn({ imgUrl, name }) {
  return (
    <>
      <div>
        <Avatar size="xl" alt={name} src={imgUrl} className="p-2" />
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
