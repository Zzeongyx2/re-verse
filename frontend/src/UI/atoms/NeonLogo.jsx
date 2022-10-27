import { Box, Container, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../pages/Login";

function NeonLogo() {
  const [move, setMove] = useState(false);
  const [start, setStart] = useState(false);
  const handleMove = () => {
    setMove((prev) => !prev);
    setStart((prev) => !prev);
  };
  return (
    // FIXME: 나중에 반응형으로 바꿀 것!!!!!!
    <Box className="flex m-0 w-screen items-center justify-center">
      <Container>
        <Box className="relative">
          {/* // FIXME: move down 될 때 끊기는 이슈 고칠 것 */}
          <Box
            onClick={handleMove}
            className={
              `cursor-pointer max-w-[700px] min-w-[500px] my-0 mx-auto border-[6px] border-[#f1f5ff] rounded-lg text-center py-8 px-11 relative flex items-center justify-center shadow-3xl animate-blinking transform transition duration-700 ease-in-out` +
              (!move ? ` scale-100` : ` -translate-y-3/4 scale-50`)
            }
          >
            <Text
              className="flex items-center justify-center w-full font-neon text-[5.5em] text-[#f1f5ff] whitespace-pre drop-shadow-3xl animate-flicker before:content-[''] before:absolute before:h-[6px] before:-top-4 before:left-1/2 before:transform before:-translate-x-1/2 before:w-full before:bg-[#fffcd7] before:border before:rounded-lg before:shadow-4xl
            after:content-[''] after:absolute after:h-[6px] after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-full after:bg-[#fffcd7] after:border-spacing-2 after:rounded-lg after:shadow-4xl"
            >
              RE-VERSE
            </Text>
          </Box>
        </Box>
      </Container>
      <Container className="absolute grid place-items-center">
        <Box>
          <Link to="/login" element={<Login />}>
            {/* // FIXME: delay가 안먹는 이슈 고칠 것 */}
            <Text
              className={
                `absolute top-1/3 left-auto -mt-7 mb-0 -ml-[158px] font-neon text-[6.5em] z-10 text-[#f890e7] bg-transparent border-none drop-shadow-4xl` +
                (start
                  ? ` visible delay-[5000ms]`
                  : ` hidden opacity-0 transition-opacity delay-500 ease-linear`)
              }
            >
              START
            </Text>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default NeonLogo;
