import Navbar from "./components/NavBar/navbar";
import Intro from './components/intro/intro';
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Footer from "./components/Footer/footer";
import Contact from "./components/Contact/contact";
import Project from "./components/project/project";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
