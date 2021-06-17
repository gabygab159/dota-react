import React, { useState, useEffect } from "react";
import axios from "axios";

// const api = axios.create({
//   baseURL: "https://api.opendota.com/api/heroStats",
// });

export default function HeroList(props) {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.opendota.com/api/heroStats`)
      // .get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
      .then((res) => {
        console.log(res);
        setHeroes(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.localized_name}</li>
        ))}
      </ul>
    </div>
  );
}
