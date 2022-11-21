function BreadCrumbBtn({ text, to, from }) {
  return (
    <button
      className={`text-white font-bold border border-1 border-white text-xl rounded-l-lg rounded-r-[50px] w-48 h-12  text-center bg-gradient-to-t ${from} ${to}`}
    >
      {text}
    </button>
  );
}

export default BreadCrumbBtn;
