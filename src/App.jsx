//imports
// import styles from "App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

//main component to render the entire application structure 
function App() {
  return (
    <>
      <div>
        <Navbar />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;