import React from 'react';
import PropTypes from 'prop-types';
import ContextCalcMeli from './contextCalcMeli';

const CalcMeliProvider = ({children}) => {
	const context = {};

	return (
		<ContextCalcMeli.Provider value={ context }>
			{ children }
		</ContextCalcMeli.Provider>
	);
};

CalcMeliProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CalcMeliProvider;
