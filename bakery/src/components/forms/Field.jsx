import React from 'react';

/**
 * @typedef {Object} FieldWrapperProps
 * @property {string} label - Field label.
 * @property {string} id - Unique ID of the field.
 * @property {string} [error] - Error message if validation fails.
 * @property {string} [helpText] - Preventive help text to guide the user.
 * @property {React.ReactNode} children - Input component (input, select, textarea).
 */

/**
 * Base component to wrap fields with label, error, and help text.
 * 
 * @component
 * @param {FieldWrapperProps} props
 */
const FieldWrapper = ({ label, id, error, helpText, children }) => (
    <div className="product-form__group">
        <label htmlFor={id} className="product-form__label">{label}</label>
        {helpText && <span className="product-form__help" id={`${id}-help`}>{helpText}</span>}
        {children}
        {error && <small className="product-form__error" role="alert" id={`${id}-error`}>{error}</small>}
    </div>
);

/**
 * Helper to generate aria-describedby string
 */
const getDescribedBy = (id, helpText, error) => {
    const ids = [];
    if (helpText) ids.push(`${id}-help`);
    if (error) ids.push(`${id}-error`);
    return ids.length > 0 ? ids.join(" ") : undefined;
};

export const InputField = ({ label, id, error, helpText, type = "text", ...props }) => (
    <FieldWrapper label={label} id={id} error={error} helpText={helpText}>
        <input
            id={id}
            name={id}
            type={type}
            className="product-form__input"
            aria-invalid={!!error}
            aria-describedby={getDescribedBy(id, helpText, error)}
            {...props}
        />
    </FieldWrapper>
);

export const TextareaField = ({ label, id, error, helpText, ...props }) => (
    <FieldWrapper label={label} id={id} error={error} helpText={helpText}>
        <textarea
            id={id}
            name={id}
            className="product-form__textarea"
            aria-invalid={!!error}
            aria-describedby={getDescribedBy(id, helpText, error)}
            {...props}
        />
    </FieldWrapper>
);

export const SelectField = ({ label, id, error, helpText, options = [], ...props }) => (
    <FieldWrapper label={label} id={id} error={error} helpText={helpText}>
        <select
            id={id}
            name={id}
            className="product-form__select"
            aria-invalid={!!error}
            aria-describedby={getDescribedBy(id, helpText, error)}
            {...props}
        >
            <option value="" disabled>Selecciona una opción...</option>
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    </FieldWrapper>
);
