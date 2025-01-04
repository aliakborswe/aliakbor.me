import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import BacktoTop from "@/components/common/BacktoTop";
import Contact from "@/components/contact/Contact";
import Education from "@/components/education/Education";
import LoveToDo from "@/components/loveToDo/LoveToDo";
import Portfolio from "@/components/portfolio/Portfolio";
// import Services from "@/components/services/Services";
import Skill from "@/components/skill/Skill";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Education/>
      <Skill />
      <LoveToDo />
      <Portfolio />
      {/* <Services/> */}
      <Contact />
      <BacktoTop/>
    </div>
  );
};
export default Home;
