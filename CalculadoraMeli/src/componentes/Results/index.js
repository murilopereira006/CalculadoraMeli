import React, { useContext } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';

function Results() {
  const { nameProduct,
    custoFixo,
    peso,
    choosedCategoria,
    reputacao,
    markup, } = useContext(ContextCalcMeli);

  return (
    <div>
      <h1>Valor a ser anunciado:</h1>
      <h1>R$ {custoFixo * markup + parseInt(peso)}((custo * markup)+frete)+taxa</h1>
      <h2>Lucro Líquido: R$ Valor a ser anunciado - taxa - frete - custo</h2>
      <h4>Taxa anúncio clássico: R$ 00,00</h4>
      <h4>Taxa anúncio premium: R$ 00,00</h4>
      <h4>Frete: R$ {markup}</h4>
    </div>
  );
}

export default Results;