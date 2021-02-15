import React, { useContext, useEffect } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';
import { getCategories } from '../../services/fetchApi';

function Inputs() {
  const { categorias, setCategorias } = useContext(ContextCalcMeli);

	useEffect(() => {
    async function apiNewDataCategories() {
      const data = await getCategories();
      await setCategorias(data);
    }
    apiNewDataCategories();
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
					{ categorias && categorias.map((item) => <option id={ item.id } value={ item.name }>{item.name}</option>) }
				</select>
			</label>
			<label>
				Reputacao:
				<select>
					<option
            value="Laranja"
          >
						Laranja
					</option>
					<option
            value="Amarelo"
          >
						Amarelo
					</option>
					<option
            value="Verde"
          >
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