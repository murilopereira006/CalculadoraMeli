import React, { useContext } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';

function MarketPrice() {
  const {} = useContext(ContextCalcMeli);

  return (
    <div>
      <h1>Precos da concorrencia</h1>
    </div>
  );
}

export default MarketPrice;