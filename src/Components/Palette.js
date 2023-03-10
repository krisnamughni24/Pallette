import React from "react";
import Swatch from './Swatch'

const Palette = () => {
    return (
      <ul className = 'palette'>
        <Swatch red = {0} green = {0} blue = {0}/>
      </ul>
    );
  }

export default Palette;