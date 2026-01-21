export function mapProductsDTO(apiData) {
  if (!apiData) return [];
  if (Array.isArray(apiData)) return apiData;

  if (apiData.productos && Array.isArray(apiData.productos)) {
    return apiData.productos.map(item => ({
      id: item.id,
      nombre: item.nombre,
      descripcion: item.descripcion,
      imagen: item.imagen,
      precio: item.precio,
      totalVentas: item.totalVentas,
      categoria: item.categoria,
    }));
  }

  return [];
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
