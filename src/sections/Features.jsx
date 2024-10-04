import FeatureCard from "../components/features/FeatureCard";

const features = [
  {
    heading: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: "./icons/message-chat.svg",
  },
  {
    heading: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: "./icons/instant.svg",
  },
  {
    heading: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    icon: "./icons/report.svg",
  },
  {
    heading: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    icon: "./icons/connect.svg",
  },
  {
    heading: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    icon: "./icons/tools.svg",
  },
  {
    heading: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    icon: "./icons/great.svg",
  },
];

function Features() {
  return (
    <section>
      <div className="mb-24 flex w-full flex-col items-center gap-16 pt-16">
        <div className="flex max-w-[768px] flex-col items-center justify-center gap-7">
          <span className="font-base text-primary-shade1">Features</span>
          <h2 className="text-center text-[30px] font-semibold md:text-4xl">
            Analytics that feels like it’s from the future
          </h2>
          <p className="text-gray-shade2 text-center text-base">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-12 md:gap-y-16">
          {features.map((feature, i) => (
            <FeatureCard feature={feature} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
