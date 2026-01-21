import { useProductForm } from "../../hooks/useProductForm.js";
import { InputField, SelectField, TextareaField } from "../forms/Field.jsx";
import Spinner from "../ui/Spinner.jsx";
/**
 * Available categories for products.
 * @constant {Array<{value: string, label: string}>}
 */
const CATEGORIES = [
    { value: "Pan", label: "Pan" },
    { value: "Bollería", label: "Bollería" },
    { value: "Pasteles", label: "Pasteles" },
    { value: "Galletas", label: "Galletas" },
];

/**
 * ProductForm Component
 * 
 * Manages the creation of new products with validation and contextual help.
 * Logic is delegated to useProductForm hook.
 * 
 * @component
 */
function ProductForm() {
  const { formData, errors, handleChange, handleSubmit, loading, error } = useProductForm();

  return (
    <form onSubmit={handleSubmit} className="product-form" noValidate>
      <InputField
        label="Nombre del Producto"
        id="nombre"
        value={formData.nombre}
        onChange={handleChange}
        error={errors.nombre}
        helpText="Ej: Barra de pan artesana"
        placeholder="Escribe el nombre aquí..."
        required
      />

      <div className="product-form__row">
        <InputField
          label="Precio (€)"
          id="precio"
          type="number"
          step="0.01"
          value={formData.precio}
          onChange={handleChange}
          error={errors.precio}
          helpText="Precio en euros con dos decimales"
          placeholder="0.00"
          required
        />

        <SelectField
          label="Categoría"
          id="categoria"
          value={formData.categoria}
          onChange={handleChange}
          options={CATEGORIES}
          error={errors.categoria}
          helpText="Selecciona el tipo de producto"
          required
        />
      </div>

      <InputField
        label="URL de la Imagen"
        id="imagen"
        type="url"
        value={formData.imagen}
        onChange={handleChange}
        error={errors.imagen}
        helpText="Introduce un enlace directo a la imagen (https://...)"
        placeholder="https://ejemplo.com/imagen.jpg"
        required
      />

      <TextareaField
        label="Descripción"
        id="descripcion"
        rows="3"
        value={formData.descripcion}
        onChange={handleChange}
        error={errors.descripcion}
        helpText="Describe los ingredientes o características especiales"
        placeholder="Descripción detallada del producto..."
        required
      />

      <footer className="product-form__actions">
        <button type="submit" className="button" disabled={loading}>
          {loading ? <Spinner size="small" /> : "Guardar Producto"}
        </button>
      </footer>

      {error && (
        <p className="form-error">
          Error al guardar el producto: {error.message || "Algo salió mal"}
        </p>
      )}
    </form>
  );
}

export default ProductForm;

