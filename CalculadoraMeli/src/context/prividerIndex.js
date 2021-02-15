import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextCalcMeli from './contextCalcMeli';

const CalcMeliProvider = ({ children }) => {
  const [nameProduct, setNameProduct] = useState('');
  const [custoFixo, setCustoFixo] = useState(0);
  const [peso, setPeso] = useState(1);
	const [categorias, setCategorias] = useState();
	const [choosedCategoria, setchoosedCategoria] = useState();
  const [reputacao, setReputacao] = useState('Amarelo');
  const [markup, setMarkup] = useState(1.6);


	const context = {
    nameProduct,
    setNameProduct,
    custoFixo,
    setCustoFixo,
    peso,
    setPeso,
		categorias,
		setCategorias,
    choosedCategoria,
    setchoosedCategoria,
    reputacao,
    setReputacao,
    markup,
    setMarkup,
	};

	return (
		<ContextCalcMeli.Provider value={ context }>
			{ children }
		</ContextCalcMeli.Provider>
	);
};

CalcMeliProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalcMeliProvider;
