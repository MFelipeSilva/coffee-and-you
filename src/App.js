import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";

import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";

import { Categories } from "./components/Categories";

import "./App.css";

function App() {
  return (
    <Router>
      <main className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/cart" element={<></>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
