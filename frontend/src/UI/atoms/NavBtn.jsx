function NavBtn({ icon, to, from }) {
  return (
    <div
      className={`border border-1 border-white rounded-xl p-2 bg-gradient-to-t ${from} ${to} hover:from-main2 hover:to-sub2`}
    >
      <button className="flex justify-center">{icon}</button>
    </div>
  );
}

export default NavBtn;
