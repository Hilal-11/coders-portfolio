import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Projects from "./components/Projects Section/Projects";
import About from "./pages/AboutMe";
import Footer from "./pages/Footer";
import Contect from "./pages/Contect";
function App() {
  return (
    <div className="bg-white dark:bg-black">
      <div>
        <IndexPage />
      </div>
      {/* Projects Secession */}
      <div className="w-full bg-slate-50">
          <Projects />
      </div>
      {/* CONTECT PAGE */}
      {/* About Section */}
      <div className="w-full dark:bg-black bg-slate-50">
          <About />
      </div>

      <div>
        <Contect />
      </div>


    {/* FOOTER */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
