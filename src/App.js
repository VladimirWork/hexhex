import './App.css'
import React, { Component } from 'react'
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid'

class App extends Component {
  render() {
  const hexagonSize = { x: 5, y: 5 }
  const hexes1 = GridGenerator.hexagon(3)
  const hexes11 = GridGenerator.hexagon(1)
  // const hexes2 = GridGenerator.triangle(3)
  // const hexes3 = GridGenerator.orientedRectangle(3, 3)
  // const hexes4 = GridGenerator.ring(new Hex(0, 0, 0), 3)
  // const hexes5 = GridGenerator.spiral(new Hex(1, 1, 1), 5)
    return (
      <div className="App">
        <HexGrid width={1900} height={950}>
          <Layout size={hexagonSize} spacing={1.05} origin={{ x: 0, y: 0 }}>
            { hexes1.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>

          <Layout size={hexagonSize} spacing={1.05} origin={{ x: -50, y: 25 }}>
            { hexes11.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>

          <Layout size={hexagonSize} spacing={1.05} origin={{ x: 50, y: -25 }}>
            { hexes11.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>
        </HexGrid>
      </div>
    )
  }
}

export default App
