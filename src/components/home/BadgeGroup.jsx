import Badge from "../Badge";

function BadgeGroup({ content1, content2 }) {
  return (
    <span className="text-primary-shade1 border-primary-tint2 bg-gray-tint3 px- flex h-8 max-w-[355px] place-content-center items-center justify-center gap-1 rounded-full border px-3 text-xs sm:text-sm">
      <Badge filled={false}>{content1}</Badge>
      {content2}
    </span>
  );
}

export default BadgeGroup;
