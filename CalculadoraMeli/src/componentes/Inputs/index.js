import React, { useContext, useEffect } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';

function Inputs() {
  const { categorias, setCategorias } = useContext(ContextCalcMeli);

	useEffect(() => {
		setCategorias('pascoa');
		setTimeout(() => {console.log(categorias);}, 3000);
	}, []);

  return (
		<form>
			<label htmlFor="nomeProduto">
				Titulo do anuncio:
				<input
					name="nomeProduto"
					type="text"
					placeholder="Ex.: Tenis Nike Vapormax"
				/>
			</label>
			<label htmlFor="peso">
				Peso em quilos:
				<input
					name="peso"
					type="text"
					placeholder="Kg"
				/>
			</label>
			<label>
				Categoria:
				<select>
					<option>
						opciones
					</option>
					<option>
						options
					</option>
				</select>
			</label>
			<label>
				Reputacao:
				<select>
					<option>
						Laranja
					</option>
					<option>
						Amarelo
					</option>
					<option>
						Verde
					</option>
				</select>
			</label>
			<label htmlFor="markUp">
				Markup:
				<input
					name="markUp"
					type="number"
					placeholder="1.6"
				/>
			</label>
		</form>
  );
}

export default Inputs;