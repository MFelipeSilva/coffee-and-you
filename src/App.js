import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";

import Home from "./pages/home";
import Menu from "./pages/menu";
import Cart from "./pages/cart";
import About from "./pages/about";
import Contact from "./pages/contact";

import { Footer } from "./components/Footer";

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
                <Footer />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
