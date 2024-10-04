import Avatar from "../components/Avatar";

function Testimonial() {
  return (
    <section>
      <div className="bg-gray-tint3 mb-24 flex flex-col items-center justify-center gap-9 pb-16 pt-16 text-center md:p-9">
        <img className="h-10" src="./logo/logo-sysyphus.svg" />
        <h2 className="text-[30px] font-semibold md:text-5xl">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </h2>
        <div className="flex flex-col items-center justify-center">
          <Avatar path="./avatar/avatar-candice.webp"></Avatar>
          <span className="text-lg font-semibold">Candice Wu</span>
          <span className="text-gray-shade2 text-base">
            Product Manager, Sisyphus
          </span>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
