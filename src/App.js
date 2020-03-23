import React from 'react'
import './App.css'
import getData from './API'
import Chart from './Chart';


class App extends React.Component {
  state = {
    mexico: null,
    china: null,
    italy: null,
    spain: null
  }

  componentDidMount = async() =>  {
    const mexico = await getData('Mexico')
    const china = await getData('China')
    const italy = await getData('Italy')
    const spain = await getData('Spain')

    this.setState({
      mexico,
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
        <div className="column">
          <h2 className="title">
            México
          </h2>
          <div className="row">
            <h3 className="total">Casos confirmados</h3>
            {
              this.state.mexico && 
              <p className="amount"> = <code>{this.state.mexico[0]['confirmed']}</code></p>
            }
          </div>
          <div className="row">
            <h3 className="recovered">Total de recuperados</h3>
            {
              this.state.mexico && 
              <p className="amount"> = <code>{this.state.mexico[0]['recovered']}</code></p>
            }
          </div>
          <div className="row">
            <h3 className="deaths">Muertes totales</h3>
            {
              this.state.mexico &&
              <p className="amount"> = <code>{this.state.mexico[0]['deaths']}</code></p>
            }   
          </div>
        </div>

        <div className="column">
          <h2 className="title">
            China
          </h2>
          <div className="row">
            <h3 className="total">Casos confirmados</h3>
            {
              this.state.china && 
              <p className="amount"> = <code>{this.state.china[0]['confirmed']}</code></p>
            }
          </div>
          <div className="row">
            <h3 className="recovered">Total de recuperados</h3>
            {
              this.state.china && 
              <p className="amount"> = <code>{this.state.china[0]['recovered']}</code></p>
            }
          </div>
          <div className="row">
            <h3 className="deaths">Muertes totales</h3>
            {
              this.state.china &&
              <p className="amount"> = <code>{this.state.china[0]['deaths']}</code></p>
            }
          </div>
        </div>

        <div className="column">
          <h2 className="title">
            Italia
          </h2>
          <div className="row">
            <h3 className="total">Casos confirmados</h3>
            {
              this.state.italy && 
              <p className="amount"> = <code>{this.state.italy[0]['confirmed']}</code></p>
            }
          </div>
          <div className="row">
            <h3 className="recovered">Total de recuperados</h3>
            {
              this.state.italy && 
              <p className="amount"> = <code>{this.state.italy[0]['recovered']}</code></p>
            }
          </div>
          <div className="row">
            <h3 className="deaths">Muertes totales</h3>
            {
              this.state.italy &&
              <p className="amount"> = <code>{this.state.italy[0]['deaths']}</code></p>
            }
          </div>
        </div>

        <div className="column">
          <h2 className="title">
            España
          </h2>
          <div className="row">
            <h3 className="total">Casos confirmados</h3>
            {
              this.state.spain && 
              <p className="amount"> = <code>{this.state.spain[0]['confirmed']}</code></p>
            }
          </div>
          <div className="row">
            <h3 className="recovered">Total de recuperados</h3>
            {
              this.state.spain && 
              <p className="amount"> = <code>{this.state.spain[0]['recovered']}</code></p>
            }
          </div>
          <div className="row">
            <h3 className="deaths">Muertes totales</h3>
            {
              this.state.spain &&
              <p className="amount"> = <code>{this.state.spain[0]['deaths']}</code></p>
            }
          </div>
        </div>
        {
          this.state.mexico && this.state.china && this.state.italy && this.state.spain &&
          <Chart
            mexico={this.state.mexico[0]['confirmed']}
            china={this.state.china[0]['confirmed']}
            italy={this.state.italy[0]['confirmed']}
            spain={this.state.spain[0]['confirmed']}
          />
        }
        <a
          className="App-link"
          href="https://reactjs.org"
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
