import { Box, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Box className="scale-[65%]">
      <Box className="border-[6px] border-[#f1f5ff] rounded-lg text-center py-8 px-10 shadow-5xl animate-blinking transform transition ">
        <Text className="flex tracking-wide whitespace-pre items-center justify-center font-neon text-[5em] text-[#f1f5ff] drop-shadow-5xl before:content-[''] before:absolute before:h-[6px] before:-top-4 before:left-1/2 before:transform before:-translate-x-1/2 before:w-full before:bg-[#fffcd7] before:border before:rounded-lg before:shadow-4xl after:content-[''] after:absolute after:h-[6px] after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-full after:bg-[#fffcd7] after:border-spacing-2 after:rounded-lg after:shadow-4xl">
          RE-VERSE
        </Text>
      </Box>
    </Box>
  );
}

export default Logo;
