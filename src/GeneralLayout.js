import React, { Component } from 'react'
import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils } from 'react-hexgrid'
import './GeneralLayout.css'
import logo from './images/logo192.png'
import swords from './images/BTN_action047.png'

class GeneralLayout extends Component {
  constructor(props) {
    super(props)
    // Initialize hexagons with some text and image
    const hexagons = GridGenerator.hexagon(3).map((hexagon, index) => {
      return Object.assign({}, hexagon, {
        // text: index,
        image: swords
      })
    })
    this.state = { hexagons }
  }

  onDragStart(event, source) {

  }

  onDragEnd(event, source, success) {
    if (!success) {
      return
    }

    const { hexagons } = this.state

    // TODO Drop the whole hex from array, currently somethings wrong with the patterns
    // const hexas = hexagons.filter(hex => !HexUtils.equals(targetHex, hex));
    const hexas = hexagons.map(hex => {
      if (HexUtils.equals(source.state.hex, hex)) {
        // hex.text = null
        hex.image = null
      }
      return hex
    })

    this.setState({ hexagons: hexas })
  }

  render() {
      const { hexagons } = this.state
      const patternSize = { x: 6, y: 6 }
      return(
        <Layout className="tiles" size={{ x: 7, y: 7 }} flat={false} spacing={1.05} origin={{ x: 50, y: 0 }}>
            {
            hexagons.map((hex, i) => (
                <Hexagon
                    key={i}
                    q={hex.q}
                    r={hex.r}
                    s={hex.s}
                    fill={(hex.image) ? HexUtils.getID(hex) : null}
                    data={hex}
                    onDragStart={(e, h) => this.onDragStart(e, h)}
                    onDragEnd={(e, h, s) => this.onDragEnd(e, h, s)}
                >
                    { !!hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} size={patternSize} /> }
                </Hexagon>
            ))
            }
        </Layout>
      )
  }
}

export default GeneralLayout
