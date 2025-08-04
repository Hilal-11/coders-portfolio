import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import About from "./pages/AboutMe";
import Footer from "./pages/Footer";
import Contect from "./pages/Contect";
import Projects from "./components/Projects Section/Projects";
import ProjectsPreview from './pages/Projects/ProjectsPreview'
import DefaultLayout from "./layouts/default";
function App() {
  return (
    <>


          <Routes>
            <Route path="/" element={
              <>
                  <DefaultLayout>
                    <IndexPage />
                  </DefaultLayout>
                  <Projects />
                  <About/>
                  <Contect />
              </>
            }></Route>
          </Routes>

          <Routes>
            <Route path="/projects" element={
              <>
                <DefaultLayout>
                  <ProjectsPreview />
                </DefaultLayout>
              </>
            }></Route>
          </Routes>

          <Footer />
    </>
    
  );
}

export default App;
