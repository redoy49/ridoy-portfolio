import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills";
import ProjectDetails from "./components/ProjectDetails";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <About></About>
              <Skills></Skills>
              <Education></Education>
              <Projects></Projects>
              <Contact></Contact>
              <Footer></Footer>
            </>
          }
        />
        {/* Project details route */}
        <Route path="/projects/:name" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
