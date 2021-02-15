import React, { useContext, useEffect } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';
import { getCategories } from '../../services/fetchApi';

function Inputs() {
  const { categorias,
    setCategorias,
    nameProduct,
    setNameProduct,
    custoFixo,
    setCustoFixo,
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
				Título do anúncio:
				<input
					name="nomeProduto"
					type="text"
					placeholder="Ex.: Tenis Nike Vapormax"
          required='required'
          onChange={ ({ target }) => setNameProduct(target.value) }
				/>
			</label>
      <label htmlFor="custoFixo">
				Custo do produto: R$
				<input
					name="custoFixo"
					type="number"
					placeholder="30,00"
          required='required'
          onChange={ ({ target }) => setCustoFixo(target.value) }
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
          required='required'
          onChange={ ({ target }) => setchoosedCategoria(target.value) }
        >
					{ categorias && categorias
            .map((item) => <option id={ item.id } value={ item.name }>{item.name}</option>) }
				</select>
			</label>
			<label>
				Reputacao:
				<select
          required='required'
          onChange={ ({ target }) => setReputacao(target.value) }
        >
        <option>
          Selecione
        </option>
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
        type="submit"
        onClick={ () => console.log(nameProduct, custoFixo, peso, choosedCategoria, reputacao, markup) }
      >
        teste
      </button>
		</form>
  );
}

export default Inputs;