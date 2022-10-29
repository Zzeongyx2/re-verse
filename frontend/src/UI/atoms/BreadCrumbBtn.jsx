function BreadCrumbBtn({ text, to, from }) {
  return (
    <button
      className={`text-white font-bold border border-1 border-white text-2xl rounded-l-lg rounded-r-[50px] w-52 h-14  text-center bg-gradient-to-t ${from} ${to}`}
    >
      {text}
    </button>
  );
}

export default BreadCrumbBtn;
