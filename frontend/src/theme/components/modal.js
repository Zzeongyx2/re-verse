import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  header: {
    bg: "#00BEFF",
    borderTopRadius: "3xl",
    fontSize: "xl",
    textColor: "white",
    textShadow: "1px 1px 5px #757575",
  },
  overlay: {
    bg: "blackAlpha.400", //change the background
  },
  dialogContainer: {},
  dialog: {
    borderRadius: "3xl",
  },
  closeButton: {},
  body: {},
  footer: {},
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
