import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Section from "../../../shared/components/layout/Section";

/**
 * ProfilePage Component
 * 
 * Displays and manages the authenticated user's personal profile information.
 * Consumes global state from UserContext to show avatar, username, and email.
 * 
 * @component
 */
function ProfilePage() {
    const { userData } = useContext(UserContext);

    if (!userData) {
        return (
            <Section title="Perfil de Usuario">
                <div className="profile-page--empty">
                    <p>No se ha podido cargar la información del perfil. Por favor, inicia sesión de nuevo. </p>
                </div>
            </Section>
        );
    }

    return (
        <Section title="Mi Perfil">
            <div className="profile-page">
                <header className="profile-page__header">
                    <div className="profile-page__avatar-container">
                        {userData.avatar ? (
                            <img
                                src={userData.avatar}
                                alt={userData.username}
                                className="profile-page__avatar"
                            />
                        ) : (
                            <div className="profile-page__avatar-placeholder">👤</div>
                        )}
                        <button className="profile-page__avatar-btn" title="Cambiar Avatar">
                            📷
                        </button>
                    </div>

                    <div className="profile-page__intro">
                        <h2 className="profile-page__greeting">Hola, {userData.username}! 👋</h2>
                        <p className="profile-page__subtitle">Gestiona tu información personal y preferencias.</p>
                    </div>
                </header>

                <main className="profile-page__section">
                    <section className="profile-page__info-group">
                        <h3 className="profile-page__section-title">
                            Información de la Cuenta
                        </h3>

                        <div className="profile-page__fields">
                            <div className="profile-page__field">
                                <span className="profile-page__label">Nombre de Usuario</span>
                                <span className="profile-page__value">{userData.username}</span>
                            </div>

                            <div className="profile-page__field">
                                <span className="profile-page__label">Correo Electrónico</span>
                                <span className="profile-page__value">{userData.email}</span>
                            </div>

                            <div className="profile-page__field">
                                <span className="profile-page__label">Estado de Cuenta</span>
                                <span className="profile-page__value profile-page__value--success">Activa ✓</span>
                            </div>
                        </div>
                    </section>

                    <footer className="profile-page__actions">
                        <button className="button button--primary profile-page__btn">
                            Editar Perfil
                        </button>
                        <button className="button button--secondary profile-page__btn">
                            Seguridad
                        </button>
                    </footer>
                </main>
            </div>
        </Section>
    );
}

export default ProfilePage;
