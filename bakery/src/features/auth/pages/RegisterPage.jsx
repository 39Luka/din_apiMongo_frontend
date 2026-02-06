import { useNavigate, Link } from "react-router-dom";
import { registerRequest } from "../../../shared/services/authService";
import Section from "../../../shared/components/layout/Section";
import { useForm } from "../../../shared/hooks/useForm";
import { extractErrorMessage } from "../../../shared/utils/errorUtils";
import { InputField, ImageField, PasswordField } from "../../../shared/components/forms/Field";
import Spinner from "../../../shared/components/ui/Spinner";

const validateRegister = (vals) => {
    const errors = {};
    if (!vals.username?.trim()) errors.username = "El nombre de usuario es obligatorio.";
    if (!vals.email?.trim()) {
        errors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) {
        errors.email = "El formato del correo electrónico no es válido.";
    }
    if (!vals.password?.trim()) {
        errors.password = "La contraseña es obligatoria.";
    } else if (vals.password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres.";
    }
    return errors;
};

/**
 * RegisterPage Component
 * 
 * Facilitates new user enrollment.
 * Includes automatic form management, file upload for avatars, and timed redirection on success.
 * 
 * @component
 */
function RegisterPage() {
    const navigate = useNavigate();

    const {
        formData,
        errors,
        errorMsg,
        successMsg,
        loading,
        isValid,
        setErrorMsg,
        setSuccessMsg,
        handleChange,
        handleBlur,
        handleFileChange,
        handleSubmit
    } = useForm({
        initialValues: { username: "", email: "", password: "", avatar: "" },
        validate: validateRegister,
        onSubmit: async (vals) => {
            try {
                const response = await registerRequest(vals);
                if (response.status === 201) {
                    setSuccessMsg("¡Usuario creado con éxito! Redirigiendo al login...");
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                }
            } catch (error) {
                setErrorMsg(extractErrorMessage(error, "Error al registrar el usuario"));
                throw error;
            }
        }
    });

    return (
        <Section title="Registro de Usuario">
            <div className="auth-page">
                <article className="auth-card">
                    <span className="auth-card__icon" role="img" aria-label="User Plus">👤+</span>
                    <p className="auth-card__text">
                        Crea una cuenta para gestionar la panadería.
                    </p>

                    {errorMsg && (
                        <div className="auth-card__error">
                            {errorMsg}
                        </div>
                    )}

                    {successMsg && (
                        <div className="auth-card__success">
                            {successMsg}
                        </div>
                    )}

                    <form className="auth-form" onSubmit={handleSubmit} noValidate>
                        <InputField
                            label="Nombre de Usuario"
                            id="username"
                            name="username"
                            placeholder="Tu apodo"
                            value={formData.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.username}
                            required
                            autoComplete="username"
                        />

                        <InputField
                            label="Correo Electrónico"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email}
                            required
                            autoComplete="email"
                        />

                        <PasswordField
                            label="Contraseña"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password}
                            required
                            autoComplete="new-password"
                        />

                        <ImageField
                            label="URL del Avatar (Opcional)"
                            id="avatar"
                            name="avatar"
                            placeholder="https://..."
                            value={formData.avatar}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFileChange={handleFileChange}
                            error={errors.avatar}
                        />

                        <button
                            type="submit"
                            className="button button--primary button--full"
                            disabled={loading || !isValid}
                        >
                            {loading ? (
                                <>
                                    <Spinner size="small" />
                                    <span>Registrando...</span>
                                </>
                            ) : "Crear Cuenta"}
                        </button>
                    </form>

                    <div className="auth-card__footer">
                        ¿Ya tienes cuenta? <Link to="/login" className="auth-card__link">Inicia Sesión</Link>
                    </div>
                </article>
            </div>
        </Section>
    );
}

export default RegisterPage;
