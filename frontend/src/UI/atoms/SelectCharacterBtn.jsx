function SelectCharacterBtn({ imgUrl, name, checked }) {
  return (
    <div
      className={`${
        checked && "border-2 border-sub2 scale-110 "
      } aspect-square border-2 border-sub1 rounded-lg w-16 overflow-hidden hover:scale-110 transition hover:duration-500 hover:border-sub2 cursor-pointer`}
    >
      <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
    </div>
  );
}

export default SelectCharacterBtn;
