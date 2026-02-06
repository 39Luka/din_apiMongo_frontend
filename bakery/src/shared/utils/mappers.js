/**
 * Transforms an array of API product objects into frontend-compatible models.
 * @param {Array<Object>} apiData - Raw items from the server.
 * @returns {Array<Object>}
 */
export function mapProductsFromAPI(apiData) {
  if (!apiData) return [];
  return apiData.map(item => mapProductFromAPI(item));
}

/**
 * Transforms a frontend product state into the format expected by the API.
 * @param {Object} product - Local product data.
 * @returns {Object} { name, description, price, category, photo }
 */
export function mapProductToAPI(product) {
  return {
    name: product.name,
    description: product.description,
    price: Number(product.price),
    category: product.category,
    photo: product.image || ""
  }
}

/**
 * Transforms a single API product object into the frontend model.
 * Maps server-side keys (like _id and photo) to frontend keys (id and image).
 * 
 * @param {Object} apiProduct - Raw item from the server.
 * @returns {Object|null}
 */
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
