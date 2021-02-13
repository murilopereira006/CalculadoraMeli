import React from 'react';
import '../App.css';

class Results extends React.Component {
    render() {
        return(
            <div>
                <h2>Preço do produto para o ML: R$ </h2>
                <h4>Frete: ${this.props.custoFixo}</h4>
                <h4>Taxa: $</h4>
                <h4>Lucro Líquido: $</h4>
            </div>
        );
    }
}

export default Results;
