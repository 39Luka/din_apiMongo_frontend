import Card from "./Card";
/*
* Componente RenderCards
* Recibe una lista de elementos y opciones para renderizar tarjetas.
*
* @param {Array} elementos - Lista de elementos a renderizar.
* @param {Object} options - Opciones adicionales (maxItems, filtro).
*
* Justicación: ahorra código a la ahora de recorrer la lista de productos y permite aplicar filtro o otras opciones de forma opcional.
*
*/
function RenderCards({ elementos, options = {} }) {
  const { maxItems, filtro } = options;

  // Copia del array para no modificar el original (En React es buena práctica no mutar props)
  let items = [...elementos];

  // Aplicar filtro si se proporciona
  if (filtro) items = items.filter(filtro);

  // Limitar cantidad de elementos si se indica
  if (maxItems) items = items.slice(0, maxItems);

  // Generar lista de tarjetas
  return items.map((item, index) => (
    <li key={index}>
      <Card {...item} />
    </li>
  ));
}

export default RenderCards;
