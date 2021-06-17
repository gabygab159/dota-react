import { useState, useEffect } from "react";
import axios from "axios";

export default function useHeroData() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.opendota.com/api/heroStats`)
      .then((res) => {
        console.log(res);
        setHeroes(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return heroes;
}
