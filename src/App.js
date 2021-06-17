import "./App.css";
import dotalogo from "./dotalogo.png";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import HeroList from "./components/HeroList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroList />
    </div>
  );
}
