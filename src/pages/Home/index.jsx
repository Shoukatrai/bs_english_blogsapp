import Hero from "../../components/Hero";
import FeaturedPosts from "../../components/FeaturesPosts";
import Footer from "../../components/Footer";
import LatestBlogs from "../../components/LatestBlogs";
import Features from "../../components/Features";
import BlogCard from "../../components/Card";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedPosts />
      <LatestBlogs />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
