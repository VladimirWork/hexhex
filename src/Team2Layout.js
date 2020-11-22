import React, { Component } from 'react'
import { GridGenerator, Layout, Hexagon, Hex, Text, Pattern, HexUtils } from 'react-hexgrid'
import { v4 as uuidv4 } from 'uuid'
import './Team2Layout.css'

class Team2Layout extends Component {
  constructor(props) {
    super(props)
    // const hexagons = GridGenerator.hexagon(1)
    const hexagons = GridGenerator.ring(new Hex(0, 0, 0), 1)
    this.state = { hexagons }
  }

  onDragStart(event, source) {
    // If this tile is empty, let's disallow drag
    if (!source.props.data.image) {
      event.preventDefault()
    }
  }

  onDragEnd(event, source, success) {
    if (!success) {
      return
    }
    const { hexagons } = this.state
    // When hexagon is successfully dropped, empty it's text and image
    const hexas = hexagons.map(hex => {
      if (HexUtils.equals(source.state.hex, hex)) {
        // hex.text = null
        hex.image = null
      }
      return hex
    })
    this.setState({ hexagons: hexas })
  }

  // onDrop you can read information of the hexagon that initiated the drag
  onDrop(event, source, targetProps) {
    const { hexagons } = this.state
    const hexas = hexagons.map(hex => {
      // When hexagon is dropped on this hexagon, copy it's image and text
      if (HexUtils.equals(source.state.hex, hex)) {
        hex.image = targetProps.data.image
        hex.uuid = targetProps.data.uuid
        // hex.text = targetProps.data.text
      }
      return hex
    })
    this.setState({ hexagons: hexas })
  }

  // Decide here if you want to allow drop to this node
  onDragOver(event, source) {
    // Find blocked hexagons by their 'blocked' attribute
    const blockedHexas = this.state.hexagons.filter(h => h.blocked)
    // Find if this hexagon is listed in blocked ones
    const blocked = blockedHexas.find(blockedHex => {
      return HexUtils.equals(source.state.hex, blockedHex)
    })

    const { image } = source.props.data
    // Allow drop, if not blocked and there's no content already
    if (!blocked && !image) {
      // Call preventDefault if you want to allow drop
      event.preventDefault()
    }
  }

  render() {
      let { hexagons } = this.state
      const patternSize = { x: 6, y: 6 }
      return(
        <Layout className="teams" size={{ x: 7, y: 7 }} flat={false} spacing={1.05} origin={{ x: -50, y: 25 }}>
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
                    onDrop={(e, h, t) => this.onDrop(e, h, t) }
                    onDragOver={(e, h) => this.onDragOver(e, h) }
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

export default Team2Layout
