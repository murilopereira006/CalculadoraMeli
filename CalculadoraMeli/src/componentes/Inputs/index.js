import React, { useContext } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';

function Inputs() {
  const {} = useContext(ContextCalcMeli);

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
						opcao 1
					</option>
					<option>
						opcao 2
					</option>
					<option>
						opcao 3
					</option>
					<option>
						opcao 4
					</option>
					<option>
						opcao 5
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