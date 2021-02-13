import React, { useContext } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';

function Results() {
  const {} = useContext(ContextCalcMeli);

  return (
    <h1>Resultado!</h1>
  );
}

export default Results;