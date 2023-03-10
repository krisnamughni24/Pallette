import React from "react";
import Palette from './Palette'


export class Controller extends React.Component {
  constructor(props) {
    super(props)


    // this.addPalette = this.addPalette.bind(this)
    // this.removePalette = this.removePalette.bind(this)


  }

  render() {
    const palettes = [<Palette/>, <Palette/>]

    return (
      palettes.map(palette => {
        for (palette of palettes) {
          return <Palette/>
        }
      })
    )
  }

}

export default Controller;


