import Avatar from "../Avatar";
import Button from "../Button";

function StillQuestion() {
  return (
    <div className="bg-gray-tint3 pt-216 flex w-full flex-col items-center justify-center space-y-6 p-2 pb-12 pt-12 text-center sm:w-5/6 md:px-6">
      <div className="flex">
        <span className="translate-x-2 translate-y-1">
          <Avatar path="./avatar/avatar-alec.webp" />
        </span>
        <span className="z-10 rounded-full border border-white">
          <Avatar path="./avatar/avatar-olivia.webp" />
        </span>
        <span className="translate-x-[-8px] translate-y-1">
          <Avatar path="./avatar/avatar-lori.webp" />
        </span>
      </div>
      <div className="space-y-2">
        <p className="text-xl font-semibold">Still have question?</p>
        <p className="text-gray-shade3">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
      </div>
      <div className="w-auto">
        <Button>Get in touch</Button>
      </div>
    </div>
  );
}

export default StillQuestion;
