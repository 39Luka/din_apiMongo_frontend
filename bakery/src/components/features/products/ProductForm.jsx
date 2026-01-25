import { useProductForm } from "../../../hooks/useProductForm.js";
import { InputField, SelectField, TextareaField } from "../../forms/Field.jsx";
import Spinner from "../../ui/Spinner.jsx";
import { PRODUCT_CATEGORIES } from "@/constants";

/**
 * ProductForm Component
 * 
 * Manages the creation of new products with validation and contextual help.
 * Optimized structure using fieldsets and better accessibility.
 * 
 * @component
 */
function ProductForm() {
  const { formData, errors, handleChange, handleSubmit, loading, error, formRef, hasErrors } = useProductForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="product-form"
      noValidate
      ref={formRef}
      autoComplete="on"
    >
      <fieldset className="product-form__fieldset">
        <legend className="product-form__legend">Información Básica</legend>

        <InputField
          label="Nombre del Producto"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          helpText="Ej: Barra de pan artesana"
          placeholder="Escribe el nombre aquí..."
          required
          autoComplete="name"
        />

        <div className="product-form__row">
          <InputField
            label="Precio (€)"
            id="price"
            name="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            error={errors.price}
            helpText="Mínimo 0.01 €"
            placeholder="0.00"
            required
            autoComplete="off"
          />

          <SelectField
            label="Categoría"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={PRODUCT_CATEGORIES}
            error={errors.category}
            helpText="Clasifica el producto"
            required
          />
        </div>
      </fieldset>

      <fieldset className="product-form__fieldset">
        <legend className="product-form__legend">Media y Detalles</legend>

        <InputField
          label="URL de la Imagen"
          id="image"
          name="image"
          type="url"
          value={formData.image}
          onChange={handleChange}
          error={errors.image}
          helpText="URL directa (Chrome, Unsplash, etc.)"
          placeholder="https://images.unsplash.com/..."
          required
          autoComplete="photo"
        />

        <TextareaField
          label="Descripción"
          id="description"
          name="description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
          helpText="Ingredientes o notas de cata"
          placeholder="Describe el producto..."
          required
        />
      </fieldset>

      <footer className="product-form__actions">
        <button
          type="submit"
          className="button button--primary"
          disabled={loading || hasErrors}
          aria-busy={loading}
        >
          {loading ? (
            <>
              <Spinner size="small" />
              <span className="button__text">Guardando...</span>
            </>
          ) : (
            "Guardar Producto"
          )}
        </button>
      </footer>

      {error && (
        <p className="form-error" role="alert">
          <strong>Error:</strong> {error.message || "No se pudo conectar con el servidor. Revisa tu conexión."}
        </p>
      )}
    </form>
  );
}

export default ProductForm;
