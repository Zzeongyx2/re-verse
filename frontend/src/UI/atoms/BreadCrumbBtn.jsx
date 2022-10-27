function BreadCrumbBtn({ text, to, from }) {
  return (
    <button
      className={`text-white font-bold border border-1 border-white text-3xl rounded-l-lg rounded-r-[50px] w-60 h-16 text-center bg-gradient-to-t ${from} ${to}`}
    >
      {text}
    </button>
  );
}

export default BreadCrumbBtn;
