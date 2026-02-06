import React from 'react';

import { getDescribedBy } from '../../utils/a11y.js';

/**
 * @typedef {Object} FieldWrapperProps
 * @property {string} label - Field label.
 * @property {string} id - Unique ID of the field.
 * @property {string} [error] - Error message if validation fails.
 * @property {string} [helpText] - Preventive help text to guide the user.
 * @property {React.ReactNode} children - Input component (input, select, textarea).
 */

function FieldWrapper({ label, id, error, helpText, children }) {
    return (
        <div className="form-field">
            <label htmlFor={id} className="form-field__label">{label}</label>
            {helpText && <span className="form-field__help" id={`${id}-help`}>{helpText}</span>}
            {children}
            {error && <small className="form-field__error" role="alert" id={`${id}-error`}>{error}</small>}
        </div>
    );
}

function InputField({ label, id, error, helpText, type = "text", ...props }) {
    return (
        <FieldWrapper label={label} id={id} error={error} helpText={helpText}>
            <input
                id={id}
                name={id}
                type={type}
                className="form-field__input"
                aria-invalid={!!error}
                aria-describedby={getDescribedBy(id, helpText, error)}
                {...props}
            />
        </FieldWrapper>
    );
}

function TextareaField({ label, id, error, helpText, ...props }) {
    return (
        <FieldWrapper label={label} id={id} error={error} helpText={helpText}>
            <textarea
                id={id}
                name={id}
                className="form-field__input form-field__textarea"
                aria-invalid={!!error}
                aria-describedby={getDescribedBy(id, helpText, error)}
                {...props}
            />
        </FieldWrapper>
    );
}

function SelectField({ label, id, error, helpText, options = [], ...props }) {
    return (
        <FieldWrapper label={label} id={id} error={error} helpText={helpText}>
            <select
                id={id}
                name={id}
                className="form-field__input form-field__select"
                aria-invalid={!!error}
                aria-describedby={getDescribedBy(id, helpText, error)}
                {...props}
            >
                <option value="" disabled>Selecciona una opción...</option>
                {options.map((opt, index) => {
                    const value = typeof opt === 'string' ? opt : opt.value;
                    const label = typeof opt === 'string' ? opt : opt.label;
                    return (
                        <option key={`${index}-${value}`} value={value}>
                            {label}
                        </option>
                    );
                })}
            </select>
        </FieldWrapper>
    );
}

/**
 * PasswordField Component
 * 
 * Includes a visibility toggle (eye icon) for secure but accessible input.
 */
function PasswordField({ label, id, error, helpText, ...props }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const toggleVisibility = () => setShowPassword(!showPassword);

    return (
        <FieldWrapper label={label} id={id} error={error} helpText={helpText}>
            <div className="form-field__password-group">
                <input
                    id={id}
                    name={id}
                    type={showPassword ? "text" : "password"}
                    className="form-field__input form-field__password-input"
                    aria-invalid={!!error}
                    aria-describedby={getDescribedBy(id, helpText, error)}
                    {...props}
                />
                <button
                    type="button"
                    className="form-field__toggle-btn"
                    onClick={toggleVisibility}
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    tabIndex="-1"
                >
                    {showPassword ? "👁️" : "🙈"}
                </button>
            </div>
        </FieldWrapper>
    );
}

/**
 * ImageField Component
 * 
 * Encapsulates URL input, file upload trigger, and image preview.
 */
function ImageField({ label, id, error, helpText, value, onChange, onFileChange, ...props }) {
    const fileInputId = `${id}-file-upload`;

    return (
        <FieldWrapper label={label} id={id} error={error} helpText={helpText}>
            <div className="form-field__image-container">
                <div className="form-field__image-input-group">
                    <input
                        id={id}
                        name={id}
                        type="url"
                        className="form-field__input form-field__image-input"
                        value={value}
                        onChange={onChange}
                        aria-invalid={!!error}
                        aria-describedby={getDescribedBy(id, helpText, error)}
                        {...props}
                    />
                    <button
                        type="button"
                        className="button button--secondary form-field__browse-btn"
                        onClick={() => document.getElementById(fileInputId).click()}
                    >
                        Examinar...
                    </button>
                    <input
                        type="file"
                        id={fileInputId}
                        accept="image/*"
                        onChange={(e) => onFileChange(e, id)}
                        style={{ display: 'none' }}
                    />
                </div>

                {value && (
                    <div className="form-field__preview">
                        <img
                            src={value}
                            alt="Vista previa"
                            className="form-field__preview-img"
                            onError={(e) => e.target.style.display = 'none'}
                        />
                    </div>
                )}
            </div>
        </FieldWrapper>
    );
}

export { InputField, TextareaField, SelectField, ImageField, PasswordField };
