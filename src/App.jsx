import BlogPost from "./sections/BlogPost";
import Cta from "./sections/Cta";
import Features from "./sections/Features";
import Features2 from "./sections/Features2";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Questions from "./sections/Questions";
import SocialProof from "./sections/SocialProof";
import Testimonial from "./sections/Testimonial";

function App() {
  return (
    <main className="font-inter w-full px-4 md:px-10">
      <Home />
      <SocialProof />
      <Features />
      <Testimonial />
      <Features2 />
      <Questions />
      <BlogPost />
      <Cta />
      <Footer />
    </main>
  );
}

export default App;
