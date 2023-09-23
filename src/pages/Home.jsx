import CategoryList from "../components/CategoryList";
import FeaturedJobs from "../components/FeaturedJobs";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <main>
      <Hero></Hero>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
    </main>
  );
};

export default Home;