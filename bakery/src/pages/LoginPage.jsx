import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Section from "../components/layout/Section";

/**
 * Login Page
 * 
 * Simple simulation page.
 */
function LoginPage() {
    const { userLogged, login } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/admin");
    };

    return (
        <Section title="Acceso Restringido">
            <div className="admin-page__container">
                <article className="admin-login-card">
                    <p className="admin-login-card__text">
                        Esta sección es solo para personal de la panadería. Por favor, pulsa el botón para simular tu entrada al sistema.
                    </p>
                    <button
                        onClick={handleLogin}
                        className="button button--primary"
                    >
                        Entrar como Administrador
                    </button>
                </article>
            </div>
        </Section>
    );
}

export default LoginPage;
