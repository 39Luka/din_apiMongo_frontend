/**
 * Reusable Tabs Component
 * 
 * @param {Object} props
 * @param {Array<{id: string, label: string, icon?: string}>} props.tabs - List of tabs.
 * @param {string} props.activeTab - Currently active tab ID.
 * @param {Function} props.onTabChange - Callback when a tab is clicked.
 * @param {string} props.className - Additional class for the container.
 */
function Tabs({ tabs = [], activeTab, onTabChange, className = "" }) {
    return (
        <nav className={`tabs ${className}`} aria-label="Navegación por pestañas">
            <ul className="tabs__list" role="tablist">
                {tabs.map((tab) => (
                    <li key={tab.id} role="presentation" className="tabs__item">
                        <button
                            id={`tab-${tab.id}`}
                            className={`tabs__btn ${activeTab === tab.id ? 'tabs__btn--active' : ''}`}
                            onClick={() => onTabChange(tab.id)}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`panel-${tab.id}`}
                            tabIndex={activeTab === tab.id ? 0 : -1}
                        >
                            {tab.icon && <span className="tabs__icon">{tab.icon}</span>}
                            <span className="tabs__label">{tab.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Tabs;
