function Button({ type = "cta", children, onclick = null }) {
  const style = {
    cta: "bg-primary text-white border-primary",
    secondary: "border-gray bg-white text-gray-shade3",
  };
  return (
    <button
      className={`rounded-md border text-base font-semibold ${style[type]} flex h-12 w-full items-center justify-center gap-2 px-6 transition-transform active:scale-95 sm:w-auto`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default Button;
