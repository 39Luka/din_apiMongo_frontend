import { useUsers } from "../hooks/useUsers";
import StatusView from "../../../shared/components/ui/StatusView";

/**
 * UserList Component
 * 
 * Displays a tabular or grid view of all registered users in the system.
 * Handles loading and error states during data retrieval and provides a manual refresh.
 * 
 * @component
 */
function UserList() {
    const { users, loading, error, refresh } = useUsers();

    return (
        <StatusView
            loading={loading}
            error={error}
            isEmpty={!loading && !error && users.length === 0}
            emptyMessage="No se encontraron usuarios registrados en la base de datos."
            loadingMessage="Cargando usuarios registrados..."
        >
            <div className="user-list">
                <div className="user-list__grid">
                    {users.map(user => (
                        <div key={user._id} className="user-list__item">
                            <div className="user-list__avatar-wrapper">
                                {user.avatar ? (
                                    <img src={user.avatar} alt={user.username} className="user-list__avatar" />
                                ) : (
                                    <div className="user-list__avatar-placeholder">👤</div>
                                )}
                            </div>
                            <div className="user-list__info">
                                <h4 className="user-list__username">{user.username}</h4>
                                <p className="user-list__email">{user.email}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="user-list__footer">
                    <button
                        className="button button--secondary user-list__refresh-btn"
                        onClick={refresh}
                        disabled={loading}
                    >
                        🔄 Actualizar Usuarios
                    </button>
                </div>
            </div>
        </StatusView>
    );
}

export default UserList;
