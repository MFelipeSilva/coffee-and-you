import { Element } from "react-scroll";

import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";

import { Categories } from "./components/Categories";

import "./App.css";

function App() {
  return (
    <main className="main-container">
      <Element name="home">
        <Home />
      </Element>
      <Element name="menu">
        <Categories />
        <Menu />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </main>
  );
}

export default App;
