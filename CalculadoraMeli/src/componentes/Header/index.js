import React, { useContext } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';

function Header() {
  const {} = useContext(ContextCalcMeli);

  return (
    <div>
      <h1>Calculadora custos do Mercado Livre</h1>
      <h3>Saiba exatamente o quanto gasta ao vender no Meli!</h3>
    </div>
  );
}

export default Header;