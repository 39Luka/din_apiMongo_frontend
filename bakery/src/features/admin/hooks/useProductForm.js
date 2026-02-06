import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useCreateProduct from "./useCreateProduct";
import { validateProduct } from "../../../shared/utils/validation";
import { useForm } from "../../../shared/hooks/useForm";

/**
 * specialized hook for orchestrating product creation form complex logic.
 * 
 * @returns {Object} Form orchestration controller.
 * @property {Object} formData - Current form field values.
 * @property {Object} errors - Field-specific validation errors.
 * @property {Function} handleChange - Input change handler.
 * @property {Function} handleFileChange - File input (image) handler.
 * @property {Function} handleSubmit - Enhanced submission handler.
 * @property {boolean} loading - Creation request status.
 * @property {string|null} error - Global creation error message.
 * @property {React.RefObject} formRef - Reference for DOM-based focus management.
 * @property {boolean} hasErrors - Flag indicating existing validation errors.
 */
const useProductForm = () => {
  const navigate = useNavigate();
  const { submitProduct, loading, error } = useCreateProduct();
  const formRef = useRef(null);

  const {
    formData,
    errors,
    isValid,
    handleChange,
    handleBlur,
    handleFileChange,
    handleSubmit
  } = useForm({
    initialValues: {
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
    },
    validate: validateProduct,
    onSubmit: async (vals) => {
      const created = await submitProduct(vals);
      if (created) {
        navigate("/products");
      }
    }
  });

  return {
    formData,
    errors,
    isValid,
    handleChange,
    handleFileChange,
    handleSubmit,
    loading,
    error,
    formRef,
    hasErrors: Object.keys(errors).length > 0
  };
};

export { useProductForm };
