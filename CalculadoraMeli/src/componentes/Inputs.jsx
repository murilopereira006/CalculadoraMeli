import React from 'react';
import '../App.css';

class Inputs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            custoFixo: 0,
            peso: 0,
            categoria: '',
            reputação: '',
            marckup: 1.6,
            valorFinal: 0,
            freteBruto: 0,
            fretePago: 0,
            taxasPremium: 0,
            taxasClassico: 0,
            lucroLiquido: 0,
        };

        this.changingInputsState = this.changingInputsState.bind(this);
        this.calcular = this.calcular.bind(this);
    }

    changingInputsState( event ) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    calcFinal(fBruto, reputação) {
        if (reputação === 'laranja') return this.setState({ fretePago: fBruto });
        if (reputação === 'amarelo') return this.setState({ fretePago: (fBruto * 0.80) });
        if (reputação === 'verde') return this.setState({ fretePago: (fBruto * 0.50) });
    }

    calcFrete(valorFinal, pesoFrete) {
        if (pesoFrete <= 1){
            if(valorFinal < 99) { return this.setState({ fretePago: 5.00 })}
            else {
                return this.setState({ freteBruto: 33.90 });
            }
        }

        if (pesoFrete > 1 && pesoFrete <= 2){
            if(valorFinal < 99) { return this.setState({ fretePago: 5.00 })}
            else {
                return this.setState({ freteBruto: 34.90 });
            }
        }

        if (pesoFrete > 2 && pesoFrete <= 5){
            if(valorFinal < 99) { return this.setState({ fretePago: 5.00 })}
            else {
                return this.setState({ freteBruto: 43.90 });
            }
        }

        if (pesoFrete > 5 && pesoFrete <= 9){
            if(valorFinal < 99) { return this.setState({ fretePago: 5.00 })}
            else {
                return this.setState({ freteBruto: 63.90 });
            }
        }

        if (pesoFrete > 9 && pesoFrete <= 13){
            if(valorFinal < 99) { return this.setState({ fretePago: 5.00 })}
            else {
                return this.setState({ freteBruto: 99.90 });
            }
        }

        if (pesoFrete > 13 && pesoFrete <= 17){
            if(valorFinal < 99) { return this.setState({ fretePago: 5.00 })}
            else {
                return this.setState({ freteBruto: 110.90 });
            }
        }

        if (pesoFrete > 17 && pesoFrete <= 23){
            if(valorFinal < 99) { return this.setState({ fretePago: 5.00 })}
            else {
                return this.setState({ freteBruto: 129.90 });
            }
        }

        if (pesoFrete > 23 && pesoFrete <= 29){
            if(valorFinal < 99) { return this.setState({ fretePago: 5.00 })}
            else {
                return this.setState({ freteBruto: 149.90 });
            }
        }

        if (pesoFrete > 29){
            if(valorFinal < 99) { return this.setState({ fretePago: 5.00 })}
            else {
                return this.setState({ freteBruto: 169.90 });
            }
        }
    }

    taxasCobradas(custoFixo, marckup) {
        const taxas = custoFixo * marckup;
        this.setState({ taxasPremium: (taxas * 0.17) });
        this.setState({ taxasClassico: (taxas * 0.12) });
        this.setState({ valorFinal: (taxas + this.state.taxasPremium) });
    }

lucroLuquii(valorFinal, frete, taxasPremim, custoFixo) {
    const custo = frete + taxasPremim;
    const liquid = valorFinal - custo;
    const fim = liquid - custoFixo;
    this.setState({ lucroLiquido: fim });
}

calcular() {
    this.calcFrete(this.state.valorFinal, this.state.peso);
    if(this.state.valorFinal >= 99) {
        this.calcFinal(this.state.freteBruto, this.state.reputação);
        this.taxasCobradas(this.state.custoFixo, this.state.marckup);
        this.lucroLuquii(this.state.valorFinal, this.state.fretePago, this.state.taxasPremium, this.state.custoFixo);
    };
    this.taxasCobradas(this.state.custoFixo, this.state.marckup);
    this.lucroLuquii(this.state.valorFinal, this.state.fretePago, this.state.taxasPremium, this.state.custoFixo);
}

    render() {
        return (
            <div>
                <form>
                    <div className="ultimaCOmpra">
                        <div className="flexBox">
                            <span>R$ </span>
                            <input
                                type="number"
                                name="custoFixo"
                                placeholder="custo da última compra"
                                onChange={this.changingInputsState}
                            />
                        </div>
                    </div>
                    <div className="custom-select">
                        <select 
                            name="categoria"
                            onChange={this.changingInputsState}
                            className="categoriass"
                        >
                            <option >Selecione uma categoria</option>
                            <option value="Ferramentas manuais e pneumáticas">Ferramentas manuais e pneumáticas</option>
                            <option value="Fitas e Materias Escolares">Fitas e Materias Escolares</option>
                            <option value="Acessorio para veículos">Acessorio para veículos</option>
                        </select>
                    </div>
                    <div className="line">
                        <div className="radiosButton">
                            <label>
                                <input type="radio" name="reputação" value="laranja" onChange={this.changingInputsState} />
                                laranja
                            </label>
                            <label>
                                <input type="radio" name="reputação" value="amarelo" onChange={this.changingInputsState} />
                                amarelo
                            </label>
                            <label>
                                <input type="radio" name="reputação" value="verde" onChange={this.changingInputsState} />
                                verde
                            </label>
                        </div>
                    </div>
                    <label>
                        Peso:
                        <input
                            type="number"
                            name="peso"
                            placeholder="em Kg"
                            onChange={this.changingInputsState}
                        />
                    </label>                    
                </form>
                <div className="centerButton">
                <button className="buttontones" onClick={() => {this.calcular()}}>Calcular</button>
                </div>
                <div className="results">
                    <h2>Preço do produto para o ML: R$ {this.state.valorFinal}</h2>
                    <h4>Frete: R$ {this.state.fretePago}</h4>
                    <h4>Taxa anuncio Premium: R$ {this.state.taxasPremium}</h4>
                    <h5>Taxa anuncio clássico: R$ {this.state.taxasClassico}</h5>
                    <h2>Lucro Líquido: R$ {this.state.lucroLiquido}</h2>
                </div>
            </div>
        );
    }
}

export default Inputs;
