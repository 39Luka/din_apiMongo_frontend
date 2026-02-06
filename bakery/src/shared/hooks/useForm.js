import { useState, useCallback, useEffect } from "react";

/**
 * Generic useForm hook for state management and submission lifecycle.
 * Provides synchronized handling of inputs, file uploads, and submission status.
 * 
 * @param {Object} options - Hook configuration.
 * @param {Object} options.initialValues - Initial state for the form fields (key-value pairs).
 * @param {function(Object): Promise<any>} options.onSubmit - Async function called on valid submission. Receives the final formData.
 * @param {function(Object): Object} [options.validate] - Optional sync validation function.
 * 
 * @returns {Object} Form controller.
 * @property {Object} formData - The current state of all form fields.
 * @property {Function} setFormData - Manual state setter for complex scenarios.
 * @property {Object} errors - Map of field names to error messages.
 * @property {Function} setErrors - Manual error setter.
 * @property {string} status - Form lifecycle state: 'idle' | 'submitting' | 'success' | 'error'.
 * @property {Function} setStatus - Manual status setter.
 * @property {boolean} loading - Shorthand derived from status === 'submitting'.
 * @property {Function} setLoading - Shorthand to toggle between 'submitting' and 'idle'.
 * @property {string} errorMsg - A general, non-field-specific error message.
 * @property {Function} setErrorMsg - Setter for the general error message.
 * @property {string} successMsg - A general success message to display after onSubmit.
 * @property {Function} setSuccessMsg - Setter for the general success message.
 * @property {Function} handleChange - Event handler for inputs (supports text, checkbox, etc.).
 * @property {Function} handleFileChange - Specialized handler for file inputs (converts to Base64).
 * @property {Function} handleSubmit - Orchestrates validation and calls onSubmit.
 * @property {Function} resetForm - Reverts formData to initialValues and clears errors/messages.
 */
export const useForm = ({ initialValues, onSubmit, validate }) => {
    const [formData, setFormData] = useState(initialValues);
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [touched, setTouched] = useState({});

    // Synchronous validation: avoids "stale state" issues during rapid typing
    const errors = validate ? validate(formData) : {};
    const isValid = Object.keys(errors).length === 0;

    const handleChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;

        setFormData(prev => ({ ...prev, [name]: val }));

        // Instant feedback once they start typing
        setTouched(prev => ({ ...prev, [name]: true }));

        if (errorMsg) setErrorMsg("");
    }, [errorMsg]);

    const handleBlur = useCallback((e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    }, []);

    const handleFileChange = useCallback((e, fieldName = 'image') => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTouched(prev => ({ ...prev, [fieldName]: true }));
                setFormData(prev => ({ ...prev, [fieldName]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    }, []);

    const handleSubmit = async (e) => {
        if (e && e.preventDefault) e.preventDefault();

        // Mark all fields as touched to show any missing required fields
        const allTouched = Object.keys(formData).reduce((acc, key) => {
            acc[key] = true;
            return acc;
        }, {});
        setTouched(allTouched);

        setErrorMsg("");
        setSuccessMsg("");

        if (!isValid) return;

        setStatus('submitting');
        try {
            await onSubmit(formData);
            setStatus('success');
        } catch (err) {
            setStatus('error');
            // If the error message is an object or string from the server, 
            // the consumer handles navigation or display.
        }
    };

    const resetForm = useCallback(() => {
        setFormData(initialValues);
        setErrorMsg("");
        setSuccessMsg("");
        setTouched({});
    }, [initialValues]);

    // Only expose errors for fields that have been touched
    const visibleErrors = Object.keys(errors).reduce((acc, key) => {
        if (touched[key]) acc[key] = errors[key];
        return acc;
    }, {});

    return {
        formData,
        setFormData,
        errors: visibleErrors,
        isValid,
        touched,
        handleBlur,
        status,
        setStatus,
        loading: status === 'submitting',
        setLoading: (val) => setStatus(val ? 'submitting' : 'idle'),
        errorMsg,
        setErrorMsg,
        successMsg,
        setSuccessMsg,
        handleChange,
        handleFileChange,
        handleSubmit,
        resetForm
    };
};
