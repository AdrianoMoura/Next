import React, { Component } from 'react'
import './ModalMimos.scss'

class ModalMimos extends Component {
  render() {
    const { visible } = this.props

    return (
      <div style={{ display: visible ? 'block' : 'none' }}>
        <div className="modal-mimos">
          <div className="modal-header">
            <h2>
              Regras de Uso
            </h2>
            <button onClick={this.props.closeModal} />
          </div>
          <div className="modal-body">
            <div className="colmodal">
              <h2>
                O Mimo só vai valer se estiver tudo certo com seu cadastro na marca parceira, ok?
              </h2>
            </div>
            <div className="colmodal">
              <div>
                <h3>
                  Bem-vindo aos mimos do next!
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies elit nulla, at gravida lacus lacinia id. Fusce tempus, nisl sit amet semper ornare, magna erat posuere elit, ac egestas risus elit sit amet dolor. Phasellus lacinia sit amet quam ac lacinia. Cras a leo vitae velit bibendum consectetur. Curabitur fermentum fermentum neque in varius. Aliquam erat volutpat. Cras aliquet nibh sit amet diam elementum, vel tempor lorem tincidunt. Vivamus eget lectus tempus, gravida libero quis, imperdiet metus. Fusce rhoncus nunc eget facilisis pulvinar. Proin hendrerit erat lorem, non efficitur dui vulputate non.</p>
                <p>Duis eget bibendum ante. Proin sed fermentum enim. Mauris sit amet sapien eu augue commodo mollis nec et eros. Aenean tincidunt leo eu efficitur gravida. Praesent non faucibus enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc cursus ligula sit amet mauris blandit, at tempor ante euismod. Integer vitae pulvinar neque. Pellentesque at orci a leo sodales ultrices et id dolor. Pellentesque facilisis turpis ac elit euismod vulputate. Phasellus interdum nibh sed auctor condimentum. Integer dictum nulla nec libero suscipit, quis rhoncus quam commodo. Morbi tristique ante eu nisl pretium, quis congue est tempor. Donec mauris eros, lacinia non nisl sodales, auctor pretium ligula. Integer pharetra pellentesque lorem in elementum. Nunc vestibulum volutpat velit a congue.</p>
                <p>Curabitur urna tellus, faucibus vel vestibulum aliquet, convallis sit amet quam. Maecenas eget quam tristique, consectetur ipsum vitae, ullamcorper libero. Curabitur auctor diam vel nisi ornare pretium. Etiam dictum pellentesque ornare. Phasellus egestas enim eget nisi convallis, in varius quam ultrices. Etiam in ante ut sem convallis pharetra. Nulla erat orci, varius pellentesque risus vel, rutrum ullamcorper velit. Morbi dapibus augue vel sapien venenatis, sed lobortis mauris venenatis. Etiam imperdiet mi eu ante mattis, sit amet malesuada nunc ornare. Curabitur quis justo ultrices, consectetur metus vestibulum, congue odio. Suspendisse vitae tortor id dolor ultrices pharetra. Pellentesque id risus velit.</p>
                <p>Nunc condimentum sem leo, in sollicitudin velit malesuada sit amet. Ut nunc lectus, finibus in vehicula nec, sodales sit amet mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis mi et nisl eleifend laoreet. Curabitur nec molestie nunc. Quisque consectetur ipsum ante, iaculis egestas odio imperdiet ac. Integer varius, neque at maximus elementum, est leo consectetur tellus, sit amet interdum eros ligula quis est.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalMimos