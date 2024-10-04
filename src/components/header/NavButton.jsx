function NavButton({ text = "", icon = null, onClick = null }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-shade2 flex items-center gap-1 text-base font-semibold"
    >
      {text} {icon}
    </button>
  );
}

export default NavButton;
