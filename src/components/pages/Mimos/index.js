import React, { Component } from 'react'
import Header from '../../Header/Header'
import Cover from './Components/Cover'
import Mimos from './Components/Mimos'
import Vantagens from './Components/Vantagens'

class index extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Cover />
          <Mimos />
          <Vantagens />
        </div>
      </div>
    )
  }
}

export default index