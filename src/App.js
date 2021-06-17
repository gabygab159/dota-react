import "./App.css";
import dotalogo from "./dotalogo.png";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import HeroList from "./components/HeroList";
import useHeroData from "./hooks/useHeroData";

export default function App() {
  const { heroes, setHeroes } = useHeroData([]);
  return (
    <div className="App">
      <Navbar />
      <HeroList heroes={heroes} />
    </div>
  );
}
