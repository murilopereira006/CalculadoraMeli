export async function getCategories() {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
		const categories = response.json();
		return categories;
  }

export async function getProductsFromCategoryAndQuery(categoryId, query) {
	const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
	const product = response.json();
	return product;
}

export async function getProductsFromQuery(query) {
	const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
	const object = result.json();
	return object;
}