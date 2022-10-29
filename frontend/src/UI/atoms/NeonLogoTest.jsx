function NeonLogoTest() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] my-0 mx-auto border-[6px] border-[#f1f5ff] rounded-lg text-center py-8 px-11 relative flex items-center justify-center shadow-3xl animate-blinking">
        <span
          className="w-full font-neon text-[5.5em] text-[#f1f5ff] whitespace-pre relative animate-flicker
       before:content-[''] before:absolute before:h-1.5 before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-full before:bg-[#fffcd7] before:rounded-lg before:shadow-4xl before:animate-blinking2
        after:content-[''] after:absolute after:h-1.5 after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:bg-[#fffcd7] after:rounded-lg after:shadow-4xl after:animate-blinking2"
        >
          {/* RE-VERSE */}
          <span className="drop-shadow-3xl">RE-VERSE</span>
        </span>
      </div>
      <div className="absolute">
        <span className="font-neon text-[5.5em] text-[#f890e7] drop-shadow-4xl">
          START
        </span>
      </div>
    </div>
  );
}

export default NeonLogoTest;
