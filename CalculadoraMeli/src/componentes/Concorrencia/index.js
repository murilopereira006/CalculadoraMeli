import React, { useContext, useState, useEffect } from 'react';
import ContextCalcMeli from '../../context/contextCalcMeli';
import { getProductsFromCategoryAndQuery, getProductsFromQuery } from '../../services/fetchApi';

function MarketPrice() {
  const { nameProduct, idCategoria, frete } = useContext(ContextCalcMeli);
  const [products, setProducts] = useState();

  useEffect(() => {
    async function apiNewProducts() {
      const data = await getProductsFromCategoryAndQuery(idCategoria, nameProduct);
      await setProducts(data);
    }
    apiNewProducts();
  }, [frete]);

  return (
    <div>
      <h1>Precos da concorrencia</h1>
      { products && products.results.map((item, index) => index < 6 && <div id={ item.id }>
        <h2>{item.title}</h2>
        <img src={item.thumbnail} alt={item.title} />
        <h3>{item.price}</h3>
      </div>) }
    </div>
  );
}

export default MarketPrice;