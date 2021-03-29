import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td }  from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

import './App.css'
import getCountriesData from './API'
import HorizontalBarChart, { VerticalBarChart } from './Chart'


class App extends React.Component {
  state = {
    countries: null,
    fullData: null,
    query: '',
    top: 3,
    topCountries: null,
    topCountriesActiveCases: null,
    topCountriesRecovered: null
  }

  contains = (name, query) => {
    if(name.includes(query)) {
      return true
    }

    return false
  }

  handleSearch = event => {
    const text = event.target.value
    
    const formattedQuery = text.toLowerCase()

    const data = this.state.fullData.filter(country => {
      return this.contains(country['country_name'].toLowerCase(), formattedQuery)
    })

    this.setState({
      countries: data,
      query: text
    })
  }

  componentDidMount = async() =>  {
    const countries = await getCountriesData()

    let topCountries = []
    let topCountriesActiveCases = []
    let topCountriesRecovered = []
    for(let i = 0; i < this.state.top; i++) {
      topCountries.push(countries[i].country_name)
      topCountriesActiveCases.push(countries[i].active_cases.replace(/[\s,]/g, ''))
      topCountriesRecovered.push(countries[i].total_recovered.replace(/[\s,]/g, ''))
    }

    this.setState({
      countries,
      fullData: countries,
      topCountries,
      topCountriesActiveCases,
      topCountriesRecovered
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
          this.state.topCountries && this.state.topCountriesActiveCases &&
          <HorizontalBarChart
            labels={this.state.topCountries}
            cases={this.state.topCountriesActiveCases}
          />
        }

        {
          !this.state.countries && 
          <h3 className="loading">Cargando datos...</h3>
        }

        {
          this.state.countries &&
            <input type="text" name="query" value={this.state.query} placeholder="Buscar..." onChange={this.handleSearch}
              className="search-bar" />
        }

        {
          this.state.countries && 
          <Table className="content">
            <Thead>
              <Tr>
                <Th className="title">País</Th>
                <Th className="title">Casos activos</Th>
                <Th className="title">Total de recuperados</Th>
                <Th className="title">Muertes totales</Th>
                <Th className="title">Estado crítico</Th>
              </Tr>
            </Thead>
            <Tbody>
              {this.state.countries.map(result =>
                (result['country_name']) && 
                <Tr key={result['country_name']}>
                  <Td>{result['country_name']}</Td>
                  <Td>{result['active_cases']}</Td>
                  <Td>{result['total_recovered']}</Td>
                  <Td>{result['deaths']}</Td>
                  <Td>{result['serious_critical']}</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        }
      
        {
          this.state.topCountries && this.state.topCountriesRecovered &&
          <VerticalBarChart
            labels={this.state.topCountries}
            cases={this.state.topCountriesRecovered}
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
          <code>Programado por Genaro Almaraz </code>
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

export default App
