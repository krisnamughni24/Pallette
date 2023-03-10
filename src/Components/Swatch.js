import React, { useState } from "react";
import Channel from "./Channel";

const Swatch = ({ red, green, blue}) => {

  let [r, setR] = useState(red);
  let [g, setG] = useState(green);
  let [b, setB] = useState(blue);

  const style = {
      backgroundColor: `rgb(${r},${g},${b})` };

  return (
      <li className="swatch" style={style}>
        <div> rgb (</div>
        <Channel value={r} handleValueChange={setR} />
        <Channel value={g} handleValueChange={setG} />
        <Channel value={b} handleValueChange={setB} />
        <div> ); </div>
      </li>
  );
};

export default Swatch;
