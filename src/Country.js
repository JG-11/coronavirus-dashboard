import React from 'react'
import './App.css'

const Country = props => {
    return (
      <div className="row">
        <div className="column">
          <h2 className="title"><code>{props.name}</code></h2>
        </div>
        <div className="column">
          <div className="row">
            <h3 className="total">Casos confirmados</h3>
            <p className="amount"> = <code>{ props.confirmed }</code></p>
          </div>
          <div className="row">
            <h3 className="recovered">Total de recuperados</h3>
            <p className="amount"> = <code>{ props.recovered }</code></p>
          </div>
          <div className="row">
            <h3 className="deaths">Muertes totales</h3>
            <p className="amount"> = <code>{ props.deaths }</code></p>  
          </div>
          <div className="row">
            <h3 className="critical">Estado crítico</h3>
            <p className="amount"> = <code>{ props.critical }</code></p>  
          </div>
        </div>
      </div>
    )
}

export default Country