import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";

import { Categories } from "./components/Categories";

import "./App.css";

function App() {
  return (
    <main className="main-container">
      <Home />
      <Categories />
      <Menu />
      <About />
      <Contact />
    </main>
  );
}

export default App;
