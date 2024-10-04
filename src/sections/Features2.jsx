import Badge from "../components/Badge";
import FeatureCard from "../components/features/FeatureCard";

const features2 = [
  {
    heading: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: "./icons/message-chat.svg",
    link: "#",
  },
  {
    heading: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: "./icons/instant.svg",
    link: "#",
  },
  {
    heading: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    icon: "./icons/report.svg",
    link: "#",
  },
];

function Features2() {
  return (
    <section>
      <div className="mb-24 flex flex-col items-center gap-9">
        <div className="flex max-w-[768px] flex-col items-center justify-center gap-7">
          <Badge>Features</Badge>
          <h2 className="text-center text-[30px] font-semibold md:text-4xl">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-gray-shade2 text-center text-base">
            Features Cutting-edge features for advanced analytics Powerful,
            self-serve product and growth analytics to help you convert, engage,
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
        <div className="max-h-[360px] w-[284px] overflow-hidden md:max-h-none md:w-auto">
          <picture>
            <source
              srcSet="./images/screen-mobile.webp"
              media="(max-width: 767px)"
            />
            <source
              srcSet="./images/screen-both.webp"
              media="(min-width: 768px)"
            />
            <img
              src="./images/screen-both.webp"
              className="h-auto w-auto"
              alt="Feature Image"
            />
          </picture>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-12 md:gap-y-16 md:pt-12">
          {features2.map((feature, i) => (
            <FeatureCard hasLink={true} feature={feature} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features2;
