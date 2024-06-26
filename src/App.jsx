import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from "./components";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Helmet>
        <title>Nived Ram - Portfolio Website</title>
    <meta
      name="description"
      content="Meet Nived Ram a skilled MERN Stack Developer. Explore a showcase of innovative projects, crafted with meticulous attention to detail and powered by the latest technologies. From dynamic web applications to seamless user experiences, dive into a world where creativity meets functionality. Let's build the future together, one line of code at a time."
    />
    <meta
      name="keywords"
      content="nived,ram,nivedram,nived portfolio,nived ram,full stack developers in kerala,react developer,fullstack developer,react developer bangloor"
    />
        </Helmet>
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
