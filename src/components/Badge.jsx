function Badge({ children, filled = true }) {
  return (
    <span
      className={`text-primary-shade1 border-primary-tint2 w-auto rounded-full border px-2 text-xs sm:text-sm ${filled ? "bg-gray-tint3" : "bg-white"} h-6 place-content-center`}
    >
      {children}
    </span>
  );
}

export default Badge;
