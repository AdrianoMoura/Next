import React, { Component } from 'react'
import './Vantagens.scss'
import scrollTo from '../../../../helpers/scrollTo'

class App extends Component {

  state = {
    carrouselPos: 0,
  }

  vantagensList = [
    {
      title: 'Vc pega um Uber por mês e economiza até',
      value: 'XX',
      subtitle: 'no ano*',
      icon: 'uber.svg',
      tooltip: 'R$ 20 off',
    },
    {
      title: 'Vc vai no cinema todo mês e pode economizar',
      value: 'XX',
      subtitle: 'no ano*',
      icon: 'cinemark.svg',
      tooltip: '50% off',
    },
    {
      title: 'Vc pede iFood todo mês e economiza',
      value: 'XX',
      subtitle: 'no ano*',
      icon: 'ifood.svg',
      tooltip: 'R$ 20 off',
    },
  ]

  doChange = (direction) => {

    const carrouselPos = this.state.carrouselPos + direction >= this.vantagensList.length ? 0 : this.state.carrouselPos + direction < 0 ? this.vantagensList.length - 1 : this.state.carrouselPos + direction

    this.setState({
      carrouselPos
    })

    scrollTo(document.getElementById('vantagens-carrousel-list'), carrouselPos * 260, 200)
  }

  render() {

    const { carrouselPos } = this.state

    return (
      <div className="vantagens">
        <div className="content">
          <h3>
            É só ter conta no next que sobra $ de verdade
          </h3>
          <div className="row">
            <div className="col">
              <div className="vantagens-carrousel">
                <div className="arrow left" onClick={() => this.doChange(-1)} />
                <div className="arrow right" onClick={() => this.doChange(1)} />
                <div className="list" id="vantagens-carrousel-list">
                  {
                    this.vantagensList.map((item, index) =>
                      <div className="item" key={index}>
                        <i className="icon" style={{ backgroundImage: `url("/assets/icons/${item.icon}")` }}>
                          <span>{item.tooltip}</span>
                        </i>
                        <div>
                          <h4>
                            {item.title}
                          </h4>
                          <h2>
                            R$ <span>{item.value}</span>
                          </h2>
                          <h3>
                            {item.subtitle}
                          </h3>
                        </div>
                      </div>
                    )
                  }
                </div>
                <div className="counter">
                  {this.vantagensList.map((item, index) => <div className={`bullet ${carrouselPos === index ? 'active' : ''}`} key={index} />)}
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur ekit, sed do eiusmod tempor incididunt.
            </p>
            </div>
            <div className="image" />
          </div>
        </div>
      </div>
    )
  }
}

export default App