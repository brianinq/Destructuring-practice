// import animals from "./data";

// const [cat, dog] = animals;
// const { name, sound } = cat;

// const { name: dogName, sound: dogSound } = dog;

// console.log(sound, dogSound);

import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
const {
  coloursByPopularity: [teslaTopColour, second],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
  coloursByPopularity: [hondaTopColour, hondaSecond],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
ReactDOM.render(
  <table>
    <tr>
      <th>Model</th>
      <th>Top Speed </th>
      <th>Popular color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
