import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextCalcMeli from './contextCalcMeli';

const CalcMeliProvider = ({ children }) => {
  const [nameProduct, setNameProduct] = useState('');
  const [custoFixo, setCustoFixo] = useState(0);
  const [peso, setPeso] = useState(0);
	const [categorias, setCategorias] = useState();
	const [choosedCategoria, setchoosedCategoria] = useState();
  const [reputacao, setReputacao] = useState(1);
  const [markup, setMarkup] = useState(1.6);
	const [frete, setFrete] = useState(1);

  const calcFrete = (currPeso) => {
    if (currPeso <= 0.5) setFrete(47.9 * reputacao)
    if (currPeso > 0.5 && currPeso <= 1) setFrete(47.9 * reputacao)
    if (currPeso > 0.5 && currPeso <= 1) setFrete(52.9 * reputacao)
    if (currPeso > 1 && currPeso <= 2) setFrete(61.9 * reputacao)
    if (currPeso > 2 && currPeso <= 5) setFrete(75.9 * reputacao)
    if (currPeso > 5 && currPeso <= 9) setFrete(97.9 * reputacao)
    if (currPeso > 9 && currPeso <= 13) setFrete(140.9 * reputacao)
    if (currPeso > 13 && currPeso <= 17) setFrete(187.9 * reputacao)
    if (currPeso > 17 && currPeso <= 23) setFrete(209.9 * reputacao)
    if (currPeso > 23 && currPeso <= 30) setFrete(219.9 * reputacao)
    if (currPeso > 30) setFrete(999999)
  };

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
    frete,
    calcFrete,
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
