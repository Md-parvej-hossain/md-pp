import About from '../../components/about/About';
import Hero from '../../components/hero/Hero';
import Services from '../../components/services/Services';
import TechStack from '../../components/techStack/TechStack';
const Home = () => {
  return (
    <div className="">
      <Hero />
      <About id="about" />
      <Services />
      <TechStack />
    </div>
  );
};

export default Home;
