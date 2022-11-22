import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

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
