import React, { useContext } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';
import Results from '../Results';
import MarketPrice from '../Concorrencia';

function ShowResults() {
  const { showResults } = useContext(ContextCalcMeli);

  if (showResults) {
    return (
      <div>
        <Results />
        <MarketPrice />
      </div>
    );
  } else {
    return (
      <div>
        <h3>Nao esqueca que as categorias podem variar as porcentagens da taxa.</h3>
      </div>
    );
  }
}

export default ShowResults;