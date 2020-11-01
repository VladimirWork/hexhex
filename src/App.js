import './App.css'
import React, { Component } from 'react'
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid'
import GeneralLayout from './GeneralLayout'
import Team1Layout from './Team1Layout'
import Team2Layout from './Team2Layout'
// import logo from './images/logo192.png'

class App extends Component {
  render() {
  // const hexagonSize = { x: 5, y: 5 }
  // const patternSize = { x: 5, y: 4 }
  // const hexes1 = GridGenerator.hexagon(3)
  // const hexes11 = GridGenerator.hexagon(1)
  // const hexes2 = GridGenerator.triangle(3)
  // const hexes3 = GridGenerator.orientedRectangle(1, 5)
  // const hexes4 = GridGenerator.ring(new Hex(0, 0, 0), 3)
  // const hexes5 = GridGenerator.spiral(new Hex(1, 1, 1), 5)
    return (
      <div className="App">
        <HexGrid width={1900} height={950}>

          <GeneralLayout />
          <Team1Layout />
          <Team2Layout />

          {/* <Layout size={hexagonSize} spacing={1.05} origin={{ x: 0, y: 0 }}>
            { hexes1.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>

          <Layout size={hexagonSize} spacing={1.05} origin={{ x: -50, y: 25 }}>
            { hexes11.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>

          <Layout size={hexagonSize} spacing={1.05} origin={{ x: 50, y: -25 }}>
            { hexes11.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>

          <Layout size={hexagonSize} spacing={1.05} origin={{ x: -90, y: -30 }}>
            { hexes3.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>

          <Layout size={hexagonSize} spacing={1.05} origin={{ x: 50, y: 25 }}>
            <Hexagon q={0} r={0} s={0} fill="pat-1" />
          </Layout>

          <Pattern id="pat-1" link={logo} size={patternSize} /> */}

        </HexGrid>
      </div>
    )
  }
}

export default App
