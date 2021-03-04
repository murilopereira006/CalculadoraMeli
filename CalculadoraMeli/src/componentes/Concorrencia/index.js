import React, { useContext, useState, useEffect } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';
import { getProductsFromCategoryAndQuery, getProductsFromQuery } from '../../services/fetchApi';
import './cards.css';

function MarketPrice() {
  const { nameProduct, idCategoria } = useContext(ContextCalcMeli);
  const [products, setProducts] = useState();

  useEffect(() => {
    async function apiNewProducts() {
      const data = idCategoria !== 0 ? await getProductsFromCategoryAndQuery(idCategoria, nameProduct) : await getProductsFromQuery(nameProduct);
      await setProducts(data);
    }
    apiNewProducts();
  }, [idCategoria]);

  return (
    
    <div className="testes">
      <h1>Precos da concorrencia</h1>
      { products && products.results.map((item, index) => index < 6 && <div id={ item.id } className="testiculo">
        <h2>{item.title}</h2>
        <img src={item.thumbnail} alt={item.title} />
        <h3 className="h3teste">R$: {item.price}</h3>
        <a href={ item.permalink } target="_blank">
          <button>Mais infos</button>
        </a>
      </div>) }
    </div>
  );
}

export default MarketPrice;