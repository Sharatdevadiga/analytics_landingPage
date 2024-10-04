function SocialProof() {
  const brands = [
    "boltshift.svg",
    "lightbox.svg",
    "featherdev.svg",
    "spherule.svg",
    "globalbank.svg",
    "nietzsche.svg",
  ];
  const basePath = "socialproof/";
  return (
    <section className="socialproof">
      <div className="mb-16 flex flex-col items-center gap-6 sm:mb-24">
        <p className="text-gray-shade2 text-base">
          Join 4,000+ companies already growing
        </p>
        <div className="items-items-center flex flex-wrap justify-center gap-3">
          {brands.map((brand) => (
            <img
              className="h-9 w-auto min-w-6 md:h-12"
              src={`${basePath}${brand}`}
              key={brand}
              alt={brand}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
