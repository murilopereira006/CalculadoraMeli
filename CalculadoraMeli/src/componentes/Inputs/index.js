import React, { useContext, useEffect } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';
import { getCategories } from '../../services/fetchApi';

function Inputs() {
  const { categorias,
    setCategorias,
    nameProduct,
    setNameProduct,
    peso,
    setPeso,
    choosedCategoria,
    setchoosedCategoria,
    reputacao,
    setReputacao,
    markup,
    setMarkup, } = useContext(ContextCalcMeli);

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
          onChange={ ({ target }) => setNameProduct(target.value) }
				/>
			</label>
			<label htmlFor="peso">
				Peso em quilos:
				<input
					name="peso"
					type="number"
					placeholder="1 Kg"
          onChange={ ({ target }) => setPeso(target.value) }
				/>
			</label>
			<label>
				Categoria:
				<select
          onChange={ ({ target }) => setchoosedCategoria(target.value) }
        >
					{ categorias && categorias.map((item) => <option id={ item.id } value={ item.name }>{item.name}</option>) }
				</select>
			</label>
			<label>
				Reputacao:
				<select
          onChange={ ({ target }) => setReputacao(target.value) }
        >
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
          onChange={ ({ target }) => setMarkup(target.value) }
				/>
			</label>
      <button
        type="button"
        onClick={ () => console.log(nameProduct, peso, choosedCategoria, reputacao, markup) }
      >
        teste
      </button>
		</form>
  );
}

export default Inputs;