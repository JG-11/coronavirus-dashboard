import React from 'react'
import './App.css'

import getData from './API'
import HorizontalBarChart, { RadarChart } from './Chart'
import Country from './Country'


class App extends React.Component {
  state = {
    mexico: null,
    usa: null,
    ireland: null,
    brazil: null,
    china: null,
    italy: null,
    spain: null
  }

  componentDidMount = async() =>  {
    const mexico = await getData('Mexico')
    const usa = await getData('USA')
    const ireland = await getData('Ireland')
    const brazil = await getData('Brazil')
    const china = await getData('China')
    const italy = await getData('Italy')
    const spain = await getData('Spain')

    this.setState({
      mexico,
      usa,
      ireland,
      brazil,
      china,
      italy,
      spain
    })
  }

  render() {
    return (
      <div className="container">
        <img
          src={process.env.PUBLIC_URL + "world.png"}
          className="App-logo" alt="world"/>
        <h1 className="title">
          Casos del COVID-19
        </h1>

        {
          this.state.mexico && this.state.china && this.state.italy && this.state.spain && 
          this.state.usa && this.state.ireland && this.state.brazil &&
          <HorizontalBarChart
            mexico={this.state.mexico[0]['confirmed']}
            usa={this.state.usa[0]['confirmed']}
            ireland={this.state.ireland[0]['confirmed']}
            brazil={this.state.brazil[0]['confirmed']}
            china={this.state.china[0]['confirmed']}
            italy={this.state.italy[0]['confirmed']}
            spain={this.state.spain[0]['confirmed']}
          />
        }

        <Country
          name="México"
          code="MX"
          confirmed={
            this.state.mexico && this.state.mexico[0]['confirmed']
          }
          recovered={
            this.state.mexico && this.state.mexico[0]['recovered']
          }
          deaths={
            this.state.mexico && this.state.mexico[0]['deaths']
          }
          critical={
            this.state.mexico && this.state.mexico[0]['critical']
          }
        />

        <Country
          name="Estados Unidos"
          code="US"
          confirmed={
            this.state.usa && this.state.usa[0]['confirmed']
          }
          recovered={
            this.state.usa && this.state.usa[0]['recovered']
          }
          deaths={
            this.state.usa && this.state.usa[0]['deaths']
          }
          critical={
            this.state.usa && this.state.usa[0]['critical']
          }
        />

        <Country
          name="Irlanda"
          code="IE"
          confirmed={
            this.state.ireland && this.state.ireland[0]['confirmed']
          }
          recovered={
            this.state.ireland && this.state.ireland[0]['recovered']
          }
          deaths={
            this.state.ireland && this.state.ireland[0]['deaths']
          }
          critical={
            this.state.ireland && this.state.ireland[0]['critical']
          }
        />

        <Country
          name="Brasil"
          code="BR"
          confirmed={
            this.state.brazil && this.state.brazil[0]['confirmed']
          }
          recovered={
            this.state.brazil && this.state.brazil[0]['recovered']
          }
          deaths={
            this.state.brazil && this.state.brazil[0]['deaths']
          }
          critical={
            this.state.brazil && this.state.brazil[0]['critical']
          }
        />

        <Country
          name="China"
          code="CN"
          confirmed={
            this.state.china && this.state.china[0]['confirmed']
          }
          recovered={
            this.state.china && this.state.china[0]['recovered']
          }
          deaths={
            this.state.china && this.state.china[0]['deaths']
          }
          critical={
            this.state.china && this.state.china[0]['critical']
          }
        />

        <Country
          name="Italia"
          code="IT"
          confirmed={
            this.state.italy && this.state.italy[0]['confirmed']
          }
          recovered={
            this.state.italy && this.state.italy[0]['recovered']
          }
          deaths={
            this.state.italy && this.state.italy[0]['deaths']
          }
          critical={
            this.state.italy && this.state.italy[0]['critical']
          }
        />

        <Country
          name="España"
          code="ES"
          confirmed={
            this.state.spain && this.state.spain[0]['confirmed']
          }
          recovered={
            this.state.spain && this.state.spain[0]['recovered']
          }
          deaths={
            this.state.spain && this.state.spain[0]['deaths']
          }
          critical={
            this.state.spain && this.state.spain[0]['critical']
          }
        />

        {
          this.state.mexico && this.state.china && this.state.italy && this.state.spain && 
          this.state.usa && this.state.ireland && this.state.brazil &&
          <RadarChart
            mexico={this.state.mexico[0]['recovered']}
            usa={this.state.usa[0]['recovered']}
            ireland={this.state.ireland[0]['recovered']}
            brazil={this.state.brazil[0]['recovered']}
            china={this.state.china[0]['recovered']}
            italy={this.state.italy[0]['recovered']}
            spain={this.state.spain[0]['recovered']}
          />
        }
        
        <a
          className="App-link top"
          href="https://github.com/JG-11/coronavirus-dashboard"
          target="_blank"
          rel="noopener noreferrer">
          Visita el repositorio
        </a>

        <p className="credits">
          <code>Programado gracias a una Dr. Pepper, por Genaro Almaraz </code>
          <span role="img" aria-label="happy-face">😀</span>
        </p>
        <p className="credits">
          <code>Datos extraídos de <a href="https://rapidapi.com/astsiatsko/api/coronavirus-monitor/details" title="Coronavirus monitor" className="App-link">Coronavirus monitor</a></code>
        </p>
        <p className="credits">
          <code>
            Ícono diseñado por <a href="https://www.flaticon.es/autores/turkkub" title="turkkub" className="App-link">turkkub</a> de <a href="https://www.flaticon.es/" title="Flaticon" className="App-link">www.flaticon.es</a>
          </code>
        </p>
        <p className="credits">
          <code>Banderas proporcionadas por <a href="https://www.countryflags.io/" title="Country Flags" className="App-link">Country Flags</a></code>
        </p>
      </div>
    )
  }
}

export default App;
