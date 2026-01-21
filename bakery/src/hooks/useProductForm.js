import { useState } from "react";
import useCreateProduct from "./useCreateProduct";
import { mapProductToAPI } from "@/utils/mappers";
/**
 * Hook to manage Product Form state and validation.
 * 
 * @returns {Object} Form logic exposed properties
 */
const useProductForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    categoria: "",
    descripcion: "",
    imagen: "",
  });

  const [errors, setErrors] = useState({});
  const { submitProduct, loading, error } = useCreateProduct(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.precio || formData.precio <= 0) newErrors.precio = "Introduce un precio válido mayor a 0";
    if (!formData.categoria) newErrors.categoria = "Debes elegir una categoría";
    if (!formData.descripcion.trim()) newErrors.descripcion = "La descripción no puede estar vacía";
    if (!formData.imagen.trim()) newErrors.imagen = "La URL de la imagen es obligatoria";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
      return;
    }

    submitProduct(mapProductToAPI(formData)).then((created) => {
      if (created) {
        alert("¡Producto creado correctamente!");
        setFormData({
          nombre: "",
          precio: "",
          categoria: "",
          descripcion: "",
          imagen: "",
        });
      }
    });
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    loading, 
    error,  
  };
};

export { useProductForm };