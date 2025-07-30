import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Projects from "./components/Projects Section/Projects";

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
    </div>
  );
}

export default App;
