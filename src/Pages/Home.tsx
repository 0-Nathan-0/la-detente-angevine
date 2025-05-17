import NavBar from "../components/navBar";
import Hero from "../components/hero";
import BarFeatures from "../components/barFeatures";
import Footer from "../components/footer";
import Planning from "../components/planning";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <BarFeatures />
      <Planning />
      <Footer />
    </>
  );
};

export default Home;
