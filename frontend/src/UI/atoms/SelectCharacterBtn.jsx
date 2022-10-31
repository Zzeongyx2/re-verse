function SelectCharacterBtn({ imgUrl, name }) {
  return (
    <img
      src={imgUrl}
      alt={name}
      className="w-16 h-16 object-cover rounded-full p-1"
    />
    // <div>
    // </div>
  );
}

export default SelectCharacterBtn;
