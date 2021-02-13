import React, { useContext } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';

function Inputs() {
  const {} = useContext(ContextCalcMeli);

  return (
		<form>
			<input
				type='text'
				placeholder='bota aqui!'
			/>
		</form>
  );
}

export default Inputs;