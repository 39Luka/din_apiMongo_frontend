/**
 * Componente genérico que muestra una lista de elementos usando otro componente.
 *
 * @param {string} titulo - Título de la sección.
 */

import { useId } from "react";


function Seccion({titulo, children}) {

  // Se genera un id único
  const idTitulo = useId()

  return (
    <>
    <section 
     aria-labelledby={idTitulo} //Para que la sección se referencie por el contenido
     className="max-w-7xl mx-auto py-6 px-4">

      <header className="text-start mb-8 mt-6">
        <h2 id={idTitulo} className="text-base heading-base heading-h2">{titulo}</h2>
      </header>

  

      {children}


    </section>
    </>
  );
}
export default Seccion;
