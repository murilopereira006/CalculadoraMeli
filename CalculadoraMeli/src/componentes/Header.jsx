import React from  'react';
import '../App.css';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <h1>Calculadora de custo mínimo Mercado Livre</h1>
                <h3>insira seu custo de compra; categoria do produto; sua reputação atual.</h3>
            </div>
        );
    }
}

export default Header;
