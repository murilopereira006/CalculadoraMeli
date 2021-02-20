import React, { useContext, useEffect, useState } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';
import { getCategories } from '../../services/fetchApi';

function Inputs() {
  const { categorias,
    setCategorias,
    setNameProduct,
    custoFixo,
    setCustoFixo,
    peso,
    setPeso,
    setReputacao,
    markup,
    setMarkup,
    calcFrete,
    setIdCategoria,
    setShowResults, } = useContext(ContextCalcMeli);

  const [able, setAble] = useState(false);
  const parcialPrice = custoFixo * markup;

	useEffect(() => {
    async function apiNewDataCategories() {
      const data = await getCategories();
      await setCategorias(data);
    }
    apiNewDataCategories();
  }, []);

  useEffect(() => {
    function isAble() {
      if (peso !== 0 && custoFixo !== 0) setAble(true);
      else setAble(false);
    }
    isAble();
  }, [peso, custoFixo]);

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
      <br />
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
      <br />
			<label htmlFor="peso">
				Peso em quilos:
				<input
					name="peso"
					type="number"
					placeholder="1 Kg"
          onChange={ ({ target }) => setPeso(target.value) }
				/>
			</label>
      <br />
			<label>
				Categoria:
				<select
          required='required'
          onChange={ ({ target }) => setIdCategoria(target.value) }
        >
          <option value={ 0 } id={ 0 } >Selecione a Categoria</option>
					{ categorias && categorias
            .map((item) => <option id={ item.name } key={ item.name } value={ item.id }>{item.name}</option>) }
				</select>
			</label>
      <br />
			<label>
				Reputacao:
				<select
          required='required'
          onChange={ ({ target }) => setReputacao(target.value) }
        >
        <option
            value={0}
          >
          Selecione
        </option>
					<option
            value={1}
          >
						Laranja
					</option>
					<option
            value={0.6}
          >
						Amarelo
					</option>
					<option
            value={0.5}
          >
						Verde
					</option>
				</select>
			</label>
      <br />
			<label htmlFor="markUp">
				Markup:
				<input
					name="markUp"
					type="number"
					placeholder="1.6"
          onChange={ ({ target }) => setMarkup(target.value) }
				/>
			</label>
      <br />
      { able ? <button
        type="button"
        onClick={ () => { calcFrete(parseFloat(peso), parcialPrice); setShowResults(true); } }
      >
        Calcular
      </button> : <button disabled="disabled">Calcular</button> }
		</form>
  );
}

export default Inputs;