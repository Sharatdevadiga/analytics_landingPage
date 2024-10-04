import Button from "../Button";
import BadgeGroup from "./BadgeGroup";
import { FaRegCirclePlay } from "react-icons/fa6";

function HomeContent() {
  return (
    <div className="sm:max-h-auto mb-12 flex max-h-[822px] flex-col items-center gap-9 sm:max-h-[912px] lg:mb-24">
      <div className="flex flex-col items-center justify-center gap-9 sm:gap-[60px]">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <BadgeGroup
            content1="New feature"
            content2={`Check out the team dashboard \u2192`}
          />
          <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-6xl">
            Beautiful analytics to grow smarter
          </h1>
          <p className="lg:font-xl font-lg text-gray-shade2 max-w-[768px] text-center">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="sm: flex w-full flex-col-reverse gap-3 sm:flex sm:w-auto sm:flex-row">
          <Button type="secondary">{<FaRegCirclePlay />}Demo</Button>
          <Button type="cta">Sign up</Button>
        </div>
      </div>
      <div className="max-h-[560px] max-w-[1280px] overflow-hidden object-contain">
        <img src="./images\screen-desktop.webp" alt="dashboard" />
      </div>
    </div>
  );
}

export default HomeContent;
