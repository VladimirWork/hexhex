import React, { Component } from 'react'
import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils } from 'react-hexgrid'
import { v4 as uuidv4 } from 'uuid'
import './GeneralLayout.css'
import precision from './images/8000.png'
import domination from './images/8100.png'
import sorcery from './images/8200.png'
import resolve from './images/8300.png'
import inspiration from './images/8400.png'

class GeneralLayout extends Component {
  constructor(props) {
    super(props)
    // Initialize hexagons with some text and image
    // const hexagons = GridGenerator.hexagon(3).map((hexagon, index) => {
    //   return Object.assign({}, hexagon, {
    //     // text: index,
    //     image: precision
    //   })
    // })
    let hexagons = GridGenerator.hexagon(2)
    hexagons.map(hexagon => hexagon.uuid = uuidv4())
    hexagons[0].image = precision
    hexagons[1].image = domination
    hexagons[2].image = sorcery
    hexagons[3].image = resolve
    hexagons[4].image = inspiration
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
                    // fill={(hex.image) ? HexUtils.getID(hex) : null}
                    fill={(hex.image) ? hex.uuid : null}
                    data={hex}
                    onDragStart={(e, h) => this.onDragStart(e, h)}
                    onDragEnd={(e, h, s) => this.onDragEnd(e, h, s)}
                >
                    {/* { !!hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} size={patternSize} /> } */}
                    { !!hex.image && <Pattern id={hex.uuid} link={hex.image} size={patternSize} /> }
                </Hexagon>
            ))
            }
        </Layout>
      )
  }
}

export default GeneralLayout
