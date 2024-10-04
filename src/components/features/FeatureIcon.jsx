function FeatureIcon({ icon }) {
  return (
    <div className="border-gray-tint2 flex h-12 w-12 place-content-center rounded-md border p-2 shadow-sm">
      <img className="h-6 w-6" src={`${icon}`} />
    </div>
  );
}

export default FeatureIcon;
