import { Box } from "@chakra-ui/react";

function NavBtn({ icon, to, from }) {
  return (
    <Box
      className={`border border-1 border-white rounded-xl p-4 bg-gradient-to-t ${from} ${to} hover:from-main2 hover:to-sub2`}
    >
      <button className="flex justify-center">{icon}</button>
    </Box>
  );
}

export default NavBtn;
