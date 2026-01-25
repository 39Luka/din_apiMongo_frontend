import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useCreateProduct from "./useCreateProduct";

/**
 * Hook to manage Product Form state and validation.
 * 
 * @returns {Object} Form logic exposed properties
 */
const useProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { submitProduct, loading, error } = useCreateProduct();

  // Ref to the form to handle focus management
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre del producto es obligatorio para identificarlo en el catálogo.";
    }
    if (!formData.price || Number(formData.price) <= 0) {
      newErrors.price = "El precio debe ser un número mayor que 0.00 €.";
    }
    if (!formData.category) {
      newErrors.category = "Debes seleccionar una categoría para organizar el producto.";
    }
    if (!formData.description.trim() || formData.description.length < 10) {
      newErrors.description = "La descripción debe tener al menos 10 caracteres para informar al cliente.";
    }
    if (!formData.image.trim()) {
      newErrors.image = "La URL de la imagen es necesaria para mostrar el producto visualmente.";
    } else if (!/^https?:\/\//.test(formData.image)) {
      newErrors.image = "La URL debe ser válida y comenzar con http:// o https://";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // Automatic focus on the first field with error
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = formRef.current?.querySelector(`[name="${firstErrorField}"]`);
      if (element) {
        element.focus();
      }
      return;
    }

    submitProduct(formData).then((created) => {
      if (created) {
        setFormData({
          name: "",
          price: "",
          category: "",
          description: "",
          image: "",
        });
        navigate("/products");
      }
    });
  };

  const hasErrors = Object.keys(errors).length > 0;

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    loading,
    error,
    formRef,
    hasErrors
  };
};

export { useProductForm };
