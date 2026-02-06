import { useProductForm } from "../hooks/useProductForm.js";
import { InputField, SelectField, TextareaField, ImageField } from "../../../shared/components/forms/Field.jsx";
import Spinner from "../../../shared/components/ui/Spinner.jsx";
import { PRODUCT_CATEGORIES } from "../../../shared/constants";

/**
 * ProductForm Component
 * 
 * Manages the creation of new products with validation and contextual help.
 * Optimized structure using fieldsets and better accessibility.
 * 
 * @component
 */
function ProductForm() {
  const { formData, errors, isValid, handleChange, handleBlur, handleFileChange, handleSubmit, loading, error, formRef } = useProductForm();

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
          onBlur={handleBlur}
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
            onBlur={handleBlur}
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
            onBlur={handleBlur}
            options={PRODUCT_CATEGORIES}
            error={errors.category}
            helpText="Clasifica el producto"
            required
          />
        </div>
      </fieldset>

      <fieldset className="product-form__fieldset">
        <legend className="product-form__legend">Media y Detalles</legend>

        <ImageField
          label="Imagen del Producto (Opcional)"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          onBlur={handleBlur}
          onFileChange={handleFileChange}
          error={errors.image}
          helpText="URL directa o sube una foto local"
          placeholder="https://images.unsplash.com/..."
          autoComplete="photo"
        />

        <TextareaField
          label="Descripción"
          id="description"
          name="description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
          onBlur={handleBlur}
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
          disabled={loading || !isValid}
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

      {
        error && (
          <p className="form-error" role="alert">
            <strong>Error:</strong> {typeof error === 'string' ? error : error.message || "No se pudo conectar con el servidor."}
          </p>
        )
      }
    </form >
  );
}

export default ProductForm;
