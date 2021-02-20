import React, { useContext } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';

function Results() {
  const { nameProduct,
    custoFixo,
    frete,
    choosedCategoria,
    reputacao,
    markup, } = useContext(ContextCalcMeli);
    const parcialPrice = custoFixo * markup;
    const finalFrete = (parseFloat(frete) < 99 ? parseFloat(frete) : parseFloat(frete) * reputacao);
    const taxas = parcialPrice * 0.16;
    const totalPrice = parcialPrice + finalFrete + taxas;

  return (
    <div>
      <h1>Valor a ser anunciado:</h1>
      <h1>R$ { totalPrice }</h1>
      <h2>Lucro Líquido: R$ { totalPrice - custoFixo - finalFrete - taxas }</h2>
      <h4>Taxa anúncio clássico (aproximadamente 12%): R$ { parcialPrice * 0.12 }</h4>
      <h4>Taxa anúncio premium (aproximadamente 16%): R$ { parcialPrice * 0.16 }</h4>
      <h4>Frete: R$ { finalFrete }</h4>
    </div>
  );
}

export default Results;