import React, { useContext } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';
import './header.css';

function Header() {
  const {} = useContext(ContextCalcMeli);

  return (
    <div className="body" >
      <h1 className="h1Header" >Calculadora custos Mercado Livre</h1>
      <h3 className="h3Header" >Saiba exatamente o quanto gasta ao vender no Meli!</h3>
    </div>
  );
}

export default Header;