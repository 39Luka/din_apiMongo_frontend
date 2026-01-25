export function mapProductsFromAPI(apiData) {
  if (!apiData) return [];
  return apiData.map(item => mapProductFromAPI(item));
}

export function mapProductToAPI(product) {
  return {
    name: product.name,
    description: product.description,
    price: Number(product.price),
    category: product.category,
    photo: product.image || ""
  }
}

export function mapProductFromAPI(apiProduct) {
  if (!apiProduct) return null;

  return {
    id: apiProduct._id,
    name: apiProduct.name,
    description: apiProduct.description,
    image: apiProduct.photo,
    price: apiProduct.price,
    category: apiProduct.category,
  };
}
