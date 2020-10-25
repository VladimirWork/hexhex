import './App.css'
import React, { Component } from 'react'
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid'

class App extends Component {
  render() {
  const hexagonSize = { x: 5, y: 5 }
  const hexes1 = GridGenerator.hexagon(2)
  const hexes2 = GridGenerator.triangle(2)
  const hexes3 = GridGenerator.rectangle(2, 2)
    return (
      <div className="App">
        <HexGrid width={1800} height={900}>
          <Layout size={hexagonSize} spacing={1.05} origin={{ x: 0, y: 0 }}>
            { hexes1.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>

          <Layout size={hexagonSize} spacing={1.05} origin={{ x: -50, y: 0 }}>
            { hexes2.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>

          <Layout size={hexagonSize} spacing={1.05} origin={{ x: 50, y: 0 }}>
            { hexes3.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>
        </HexGrid>
      </div>
    )
  }
}

export default App
