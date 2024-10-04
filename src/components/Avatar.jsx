function Avatar({ path, alt = "avatar" }) {
  return (
    <div>
      <img
        className="bg-gray-tint1 border-gray h-10 w-10 rounded-full border object-cover p-[0.5px]"
        src={path}
        alt={alt}
      />
    </div>
  );
}

export default Avatar;
