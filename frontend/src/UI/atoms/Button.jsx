import { Box } from "@chakra-ui/react";

function Button({ text, to, from, color, click }) {
  return (
    <Box
      className={`border border-1 border-white rounded-3xl w-48 h-12 bg-gradient-to-t
       ${from} ${to} hover:from-main1 hover:to-sub1 text-${color} flex items-center mr-4`}
    >
      <button
        className="flex justify-center text-center w-full drop-shadow"
        onClick={() => {
          click();
        }}
      >
        {text}
      </button>
    </Box>
  );
}

export default Button;
