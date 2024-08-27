import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import LoveToDo from "@/components/loveToDo/LoveToDo";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import Skill from "@/components/skill/Skill";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skill />
      <LoveToDo />
      <Portfolio />
      <Services/>
      <Contact />
    </>
  );
};
export default Home;
