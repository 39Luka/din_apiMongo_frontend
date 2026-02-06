import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import Section from "../../../shared/components/layout/Section";
import { useForm } from "../../../shared/hooks/useForm";
import { InputField, PasswordField } from "../../../shared/components/forms/Field";
import Spinner from "../../../shared/components/ui/Spinner";

const validateLogin = (vals) => {
    const errors = {};
    if (!vals.email?.trim()) errors.email = "El correo o usuario es obligatorio.";
    if (!vals.password?.trim()) errors.password = "La contraseña es obligatoria.";
    return errors;
};

/**
 * LoginPage Component
 * 
 * Main entry point for user authentication.
 * Handles credential input and facilitates session establishment via UserContext.
 * 
 * @component
 */
function LoginPage() {
    const { userLogged, login } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        formData: credentials,
        errors,
        errorMsg,
        successMsg,
        loading,
        isValid,
        setErrorMsg,
        setSuccessMsg,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm({
        initialValues: { email: "", password: "" },
        validate: validateLogin,
        onSubmit: async (vals) => {
            const result = await login(vals);
            if (result?.success) {
                setSuccessMsg("¡Acceso concedido! Redirigiendo...");
                setTimeout(() => {
                    navigate("/admin");
                }, 1500);
            } else {
                // Security: Use generic message to prevent account enumeration
                setErrorMsg("Usuario o contraseña incorrectos");
            }
        }
    });

    // Automatic redirect if already logged in
    useEffect(() => {
        if (userLogged) {
            navigate("/admin", { replace: true });
        }
    }, [userLogged, navigate]);

    return (
        <Section title="Acceso Restringido">
            <div className="auth-page">
                <article className="auth-card">
                    <span className="auth-card__icon" role="img" aria-label="Lock">🔒</span>
                    <p className="auth-card__text">
                        Inicia sesión para acceder al panel de administración.
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
                            label="Usuario o Email"
                            id="email"
                            name="email"
                            placeholder="admin o admin@bakery.com"
                            value={credentials.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email}
                            required
                            autoComplete="username"
                        />
                        <PasswordField
                            label="Contraseña"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            value={credentials.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password}
                            required
                            autoComplete="current-password"
                        />
                        <button
                            type="submit"
                            className="button button--primary button--full"
                            disabled={loading || !isValid}
                        >
                            {loading ? (
                                <>
                                    <Spinner size="small" />
                                    <span>Cargando...</span>
                                </>
                            ) : "Acceder al Sistema"}
                        </button>
                    </form>

                    <div className="auth-card__footer">
                        ¿No tienes cuenta? <Link to="/register" className="auth-card__link">Registrate aquí</Link>
                    </div>
                </article>
            </div>
        </Section>
    );
}

export default LoginPage;
