import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextCalcMeli from './contextCalcMeli';
import { getCategories } from '../services/fetchApi';

const CalcMeliProvider = ({ children }) => {
	const [categorias, setCategorias] = useState();

	useEffect(() => {
    async function apiNewDataCategories() {
      const data = await getCategories();
      setCategorias(data);
    }
    apiNewDataCategories();
  }, []);

	const context = {
		categorias,
		setCategorias,
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
