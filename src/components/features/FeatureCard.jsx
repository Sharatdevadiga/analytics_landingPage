import FeatureIcon from "./FeatureIcon";

function FeatureCard({ feature, hasLink = false }) {
  const { heading, description, icon, link = "#" } = feature;

  return (
    <div className="p- flex max-w-[384px] flex-col items-center justify-center gap-2 text-center">
      <FeatureIcon icon={icon} />
      <h3 className="text-xl font-semibold">{heading}</h3>
      <p className="text-gray-shade2 text-base">{description}</p>
      {hasLink ? (
        <a href={`${link}`} className="text-primary-shade1 font-semibold">
          Learn more <span>&rarr;</span>
        </a>
      ) : null}
    </div>
  );
}

export default FeatureCard;
