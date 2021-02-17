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

  return (
    <div>
      <h1>Valor a ser anunciado:</h1>
      <h1>R$ { parcialPrice * 1.17 + parseInt(frete)}((custo * markup)+taxa)+frete</h1>
      <h2>Lucro Líquido: R$ Valor a ser anunciado - taxa - frete - custo</h2>
      <h4>Taxa anúncio clássico: R$ { frete }</h4>
      <h4>Taxa anúncio premium: R$ 00,00</h4>
      <h4>Frete: R$ {markup}</h4>
    </div>
  );
}

export default Results;