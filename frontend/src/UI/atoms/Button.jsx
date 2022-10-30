function Button({ text, to, from, color, click }) {
  return (
    <div
      className={`border border-1 border-white rounded-3xl w-40 h-10 bg-gradient-to-t
       ${from} ${to} hover:from-main1 hover:to-sub1 text-${color} flex items-center mr-4`}
    >
      <button
        className="flex justify-center text-center w-full drop-shadow font-bold"
        onClick={() => {
          click();
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
