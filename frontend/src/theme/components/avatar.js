import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

// const superLg = defineStyle({
//   width: 40,
//   height: 40,
//   fontSize: "6xl"
// })

// const sizes = {
//   superLg: definePartsStyle({ container: superLg }),
// }

// export const avatarTheme = defineMultiStyleConfig({ sizes })

const roundedSquare = definePartsStyle({
  container: {
    borderRadius: "sm",
  },
});

const avatarBorder = definePartsStyle({
  container: {
    border: "2px solid #B7C6E7",
  },
});

export const avatarTheme = defineMultiStyleConfig({
  variants: { roundedSquare, avatarBorder },
});
