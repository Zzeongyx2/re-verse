import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";

function NeonLogo() {
  const [move, setMove] = useState(false);
  const [start, setStart] = useState(false);
  const handleMove = () => {
    setMove((prev) => !prev);
    setStart((prev) => !prev);
  };
  return (
    // FIXME: 나중에 반응형으로 바꿀 것!!!!!!
    <Box className="m-0 w-screen items-center justify-center">
      <Container>
        <Box className="relative">
          <Box
            onClick={handleMove}
            className={
              `cursor-pointer max-w-[700px] min-w-[500px] my-0 mx-auto border-[6px] border-[#f1f5ff] rounded-lg text-center py-6 px-11 relative flex items-center justify-center shadow-3xl animate-blinking transform transition duration-700 ease-in-out` +
              (!move ? ` scale-100` : ` scale-50 -translate-y-3/4`)
            }
          >
            <Box
              className="flex items-center justify-center w-full font-neon text-[6.5em] text-[#f1f5ff] tracking-[3px] whitespace-pre drop-shadow-3xl animate-flicker before:content-[''] before:absolute before:h-[6px] before:-top-5 before:-left-1/2 before:transform before:-translate-x-1/2 before:w-full before:bg-[#fffcd7] before:border before:rounded-lg before:shadow-4xl
            after:content-[''] after:absolute after:h-[6px] after:-bottom-5 after:-left-1/2 after:transform after:-translate-x-1/2 after:w-full after:bg-[#fffcd7] after:border-spacing-2 after:rounded-lg after:shadow-4xl"
            >
              RE-VERSE
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default NeonLogo;
