import Home from "./pages/home";
import Menu from "./pages/menu";

import { Categories } from "./components/Categories";

import "./App.css";

function App() {
  return (
    <main className="main-container">
      <Home />
      <Categories />
      <Menu />
    </main>
  );
}

export default App;
