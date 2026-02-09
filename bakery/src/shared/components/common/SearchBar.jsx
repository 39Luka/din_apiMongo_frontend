
import { useRef } from 'react';
import useVoiceRecognition from "../../../shared/hooks/useVoiceRecognition";

/**
 * SearchBar Component
 * 
 * Allows users to filter the product list through text input.
 * Supports voice search via Web Speech API and swipe gesture on mobile.
 * 
 * @component
 */
function SearchBar({ searchTerm, onSearchChange }) {

    // Función que recibe el texto reconocido por voz
    // y lo usa como término de búsqueda
    const handleVoiceResult = (text) => {
        onSearchChange(text);
    };

    // Usamos el hook de reconocimiento de voz
    const { isSupported, isListening, startListening, stopListening } = useVoiceRecognition(handleVoiceResult);

    // Referencia para detectar gestos táctiles
    const touchStartRef = useRef(null);
    // Distancia mínima para considerar que es un swipe
    const minSwipeDistance = 50; // px

    // Guardamos la posición inicial del dedo
    const onTouchStart = (e) => {
        // console.log("Touch Start:", e.targetTouches[0].clientX);
        touchStartRef.current = e.targetTouches[0].clientX;
    };

    // Comprobamos si el gesto fue un swipe hacia la derecha
    const onTouchEnd = (e) => {
        if (!touchStartRef.current) return;

        const touchEnd = e.changedTouches[0].clientX;
        const distance = touchEnd - touchStartRef.current;

        // console.log("Touch End. Distance:", distance);

        // Si el swipe es suficiente, iniciamos la escucha por voz
        if (distance > minSwipeDistance) {
            // console.log("Swipe detected! Attempting to start listening...");
            if (isSupported && !isListening) {
                startListening();
            } else if (!isSupported) {
                console.warn("Voice recognition not supported or blocked (HTTPS required?)");
            }
        }

        touchStartRef.current = null;
    };

    // Botón que alterna entre empezar y parar la escucha
    const toggleListening = () => {
        if (isListening) {
            stopListening();
        } else {
            startListening();
        }
    };

    return (
        <div
            className="search-bar"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div className="search-bar__container">
                <label htmlFor="search-products" className="search-bar__label">
                    Buscar productos
                </label>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="search-bar__icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="search"
                    id="search-products"
                    className="search-bar__input"
                    placeholder={isListening ? "Escuchando..." : "Buscar productos..."}
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />

                {isSupported && (
                    <button
                        type="button"
                        className={`search-bar__voice-btn ${isListening ? 'search-bar__voice-btn--listening' : ''}`}
                        onClick={toggleListening}
                        aria-label={isListening ? "Detener búsqueda por voz" : "Iniciar búsqueda por voz"}
                        title={isListening ? "Detener" : "Hablar"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                    </button>
                )}
            </div>

            <div className="search-bar__swipe-cue">
                Desliza → para buscar por voz
            </div>
        </div>
    );
}


export default SearchBar;
