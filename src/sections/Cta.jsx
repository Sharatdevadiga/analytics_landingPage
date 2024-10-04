import Button from "../components/Button";

function Cta() {
  return (
    <section>
      <div className="bg-gray-tint3 mb-24 flex flex-col items-center justify-center gap-9 pb-16 pt-16">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-4xl">
            Start your free trial
          </h1>
          <p className="lg:font-xl font-lg text-gray-shade2 max-w-[768px] text-center">
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>
        <div className="flex w-full flex-col-reverse gap-3 sm:flex sm:w-auto sm:flex-row">
          <Button type="secondary">Learn More</Button>
          <Button type="cta">Get Started</Button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
