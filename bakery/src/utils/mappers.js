export function mapProductsDTO(apiData) {
  if (!apiData) return [];

  return apiData.map(item => ({
    id: item._id,
    nombre: item.name,
    descripcion: item.description,
    imagen: item.photo,
    precio: item.price,
    categoria: item.category,
  }));
}


export function mapProductToAPI(product) {
  return {
    name: product.nombre,
    description: product.descripcion,
    price: Number(product.precio), 
    category: product.categoria,
    photo: product.imagen || "" 
  }
}

export function mapProductDTO(apiProduct) {
  if (!apiProduct) return null;

  return {
    id: apiProduct._id,
    nombre: apiProduct.name,
    descripcion: apiProduct.description,
    imagen: apiProduct.photo,
    precio: apiProduct.price,
    categoria: apiProduct.category,
  };
}

