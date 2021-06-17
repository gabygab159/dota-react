import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HeroList(props) {
  // const [heroes, setHeroes] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.opendota.com/api/heroStats`)
  //     .then((res) => {
  //       console.log(res);
  //       setHeroes(res.data);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);
  console.log(props);
  return (
    <div>
      {/* <ul>
        {props.state.map((hero) => (
          <li key={hero.id}>{hero.localized_name}</li>
        ))}
      </ul> */}
    </div>
  );
}
