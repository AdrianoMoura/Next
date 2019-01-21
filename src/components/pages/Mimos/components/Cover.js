import React, { Component } from 'react'
import './Cover.scss'

class App extends Component {
  render() {
    return (
      <div className="cover">
        <div className="image" />
        <div className="content">
          <h2>
            Pra ganhar
            descontos
            exclusivos,
            vem pro next
          </h2>
          <p>
            Não é programa de ponto.
            É só nosso jeitinho 
            de te mimar &lt;3
          </p>
        </div>
      </div>
    )
  }
}

export default App