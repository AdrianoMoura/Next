import React, { Component } from 'react'
import './Mimos.scss'
import ModalMimos from '../../../ModalMimos';

class App extends Component {

  state = {
    selectedMimoType: 'CREDITO',
    selectedMimo: 0,
    modalVisible: false,
  }

  mimosList = {
    CREDITO: [
      {
        title: 'Alimentação',
        icon: 'food.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Compras',
        icon: 'shop.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Educação',
        icon: 'college.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Entretenimento',
        icon: 'entretenimento.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Serviços',
        icon: 'services.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Transporte',
        icon: 'transportation.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Viagens',
        icon: 'travel.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
    ],
    DEBITO: [
      {
        title: 'Alimentação',
        icon: 'food.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Compras',
        icon: 'shop.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Educação',
        icon: 'college.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Entretenimento',
        icon: 'entretenimento.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Serviços',
        icon: 'services.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Transporte',
        icon: 'transportation.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
      {
        title: 'Viagens',
        icon: 'travel.svg',
        mimos: [
          {
            title: 'R$ 20',
            subtitle: 'off por mês',
            icon: 'ifood.svg',
          },
          {
            title: 'Desconto',
            subtitle: 'especial',
            icon: 'mc.svg',
          },
        ]
      },
    ],
  }

  changeType = (type) => {
    this.setState({
      selectedMimoType: type,
      selectedMimo: 0,
    })
  }

  changeMimo = (index) => {
    this.setState({
      selectedMimo: index,
    })
  }

  render() {

    const { selectedMimoType, selectedMimo, modalVisible } = this.state

    return (
      <div className="mimos">
        <ModalMimos visible={modalVisible} closeModal={() => this.setState({ modalVisible: false })} />
        <div className="col">
          <div className="content">
            <h3>
              Apresentamos os Mimos
          </h3>
            <p>
              Parceiros exclusivos com desconto só pra vc, que é next.
          </p>
            <a onClick={() => this.setState({ modalVisible: true })}>Regras de uso</a>
          </div>
          <div className="mimos-carrousel">
            <p>Exibir Mimos para:</p>
            <div className="button-row">
              <button className={selectedMimoType === 'CREDITO' ? 'active' : undefined} onClick={() => this.changeType('CREDITO')}>Crédito</button>
              <button className={selectedMimoType === 'DEBITO' ? 'active' : undefined} onClick={() => this.changeType('DEBITO')}>Débito</button>
            </div>
            <div className="list">
              {
                this.mimosList[selectedMimoType].map((item, index) =>
                  <div key={index} onClick={() => this.changeMimo(index)} className={`item ${selectedMimo === index ? 'active' : ''}`}>
                    <i className="icon" style={{ backgroundImage: `url("/assets/icons/${item.icon}")` }} />
                    {item.title}
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="mimos-items">
          <div className="list">
            {
              this.mimosList[selectedMimoType][selectedMimo].mimos.map((item, index) =>
                <div key={index} onClick={() => this.changeMimo(index)} className="item">
                  <i className="icon" style={{ backgroundImage: `url("/assets/icons/${item.icon}")` }} />
                  <p>
                    <span>{item.title}</span>
                    <br />
                    {item.subtitle}
                  </p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App