import React, { Component } from 'react'
import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils } from 'react-hexgrid'
import './Team2Layout.css'

class Team2Layout extends Component {
  constructor(props) {
    super(props)
    const hexagons = GridGenerator.hexagon(1)
    this.state = { hexagons }
  }

  onDragStart(event, source) {

  }

  onDragEnd(event, source, success) {
      
  }

  render() {
      let { hexagons } = this.state
      return(
        <Layout className="teams" size={{ x: 7, y: 7 }} flat={false} spacing={1.05} origin={{ x: -50, y: 25 }}>
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
                    { !!hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} /> }
                </Hexagon>
            ))
            }
        </Layout>
      )
  }
}

export default Team2Layout
