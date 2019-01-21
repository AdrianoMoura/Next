import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo"></div>
                <ul className="menu">
                    <li>
                        next
                    </li>
                    <li>
                        Flow
                    </li>
                    <li>
                        Vaquinha
                    </li>
                    <li>
                        Objetivos
                    </li>
                    <li className="active">
                        Mimos
                    </li>
                    <li>
                        Propostas
                    </li>
                </ul>
                <div className="openAccountBtn">
                    <p>Abra sua conta</p>
                </div>
            </div>
        )
    }
}

export default Header