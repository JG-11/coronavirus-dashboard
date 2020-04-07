import React from 'react'
import './App.css'

import getCountriesData, { getCountryData } from './API'
import HorizontalBarChart, { RadarChart } from './Chart'
import Country from './Country'


class App extends React.Component {
  state = {
    countries: null,
    mexico: null,
    usa: null,
    china: null,
    italy: null,
    spain: null
  }

  componentDidMount = async() =>  {
    const countries = await getCountriesData()
    const mexico = await getCountryData('Mexico')
    const usa = await getCountryData('USA')
    const china = await getCountryData('China')
    const italy = await getCountryData('Italy')
    const spain = await getCountryData('Spain')

    this.setState({
      countries,
      mexico,
      usa,
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
          this.state.mexico && this.state.china && this.state.italy && this.state.spain && this.state.usa &&
          <HorizontalBarChart
            mexico={this.state.mexico[0]['confirmed']}
            usa={this.state.usa[0]['confirmed']}
            china={this.state.china[0]['confirmed']}
            italy={this.state.italy[0]['confirmed']}
            spain={this.state.spain[0]['confirmed']}
          />
        }

        {
          this.state.countries && this.state.countries.map(result => {
            return (
              <Country
                name={result['country_name']}
                confirmed={result['cases']}
                recovered={result['total_recovered']}
                deaths={result['deaths']}
                critical={result['serious_critical']}
              />
            )
          })
        }

        {
          this.state.mexico && this.state.china && this.state.italy && this.state.spain && this.state.usa &&
          <RadarChart
            mexico={this.state.mexico[0]['recovered']}
            usa={this.state.usa[0]['recovered']}
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
      </div>
    )
  }
}

export default App;
