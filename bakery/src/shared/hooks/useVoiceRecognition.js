/**
 * NOTA — Reconocimiento de voz en navegador
 *
 * Este hook utiliza la Web Speech API (SpeechRecognition), una API
 * experimental y no estandarizada que actualmente solo funciona de
 * forma fiable en navegadores basados en Chromium (principalmente Chrome).
 *
 * Aunque permite simular una Natural User Interface (NUI) basada en voz,
 * NO constituye una NUI real por los siguientes motivos:
 *
 * - El navegador controla completamente el acceso al micrófono.
 * - El reconocimiento solo puede iniciarse tras una acción explícita
 *   del usuario (click, touch), por razones de seguridad.
 * - El soporte varía según navegador, sistema operativo y dispositivo.
 * - En entornos móviles, el teclado virtual y la gestión del foco pueden
 *   interrumpir o finalizar el reconocimiento de forma automática.
 * - La existencia de la API (isSupported) no garantiza su funcionamiento real.
 *
 * Este enfoque es válido como demostración conceptual en aplicaciones web,
 * pero para interfaces naturales de voz robustas y multiplataforma se
 * recomienda el uso de aplicaciones nativas (React Native) o servicios
 * Speech-to-Text externos (Whisper, Azure, Google Speech, etc.).
 */
import { useState, useEffect, useRef } from "react";

const useVoiceRecognition = (onResult) => {

    // Cogemos la API de reconocimiento de voz según el navegador
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    // Indica si el reconocimiento está activo
    const [isListening, setIsListening] = useState(false);

    // Referencia para guardar la instancia del reconocimiento
    // y que no se pierda entre renderizados
    const recognitionRef = useRef(null);

    // Comprobamos si el navegador soporta la API
    const isSupported = !!SpeechRecognition;
    // Si existe -> true, si no existe -> false

    useEffect(() => {
        // Si no hay soporte, no hacemos nada
        if (!isSupported) return;

        // Creamos el objeto de reconocimiento de voz
        const recognition = new SpeechRecognition();

        // Configuración básica
        recognition.lang = "es-ES";        // Idioma español
        recognition.continuous = false;    // Se para solo al terminar
        recognition.interimResults = false;// Solo resultado final

        // Cuando se reconoce la voz correctamente
        recognition.onresult = (event) => {
            // Obtenemos el texto reconocido
            const text = event.results[0][0].transcript;

            // Enviamos el texto al componente que usa el hook
            onResult(text);

            // Indicamos que ya no está escuchando
            setIsListening(false);
        };

        // Si ocurre algún error durante el reconocimiento
        recognition.onerror = (event) => {
            console.error("Error en reconocimiento:", event.error);
            setIsListening(false);
        };

        // Cuando el reconocimiento termina por cualquier motivo
        recognition.onend = () => {
            setIsListening(false);
        };

        // Guardamos la instancia en la referencia
        recognitionRef.current = recognition;

    }, [SpeechRecognition, onResult, isSupported]);

    // Función para empezar a escuchar
    const startListening = () => {
        if (!isSupported || !recognitionRef.current) return;

        try {
            recognitionRef.current.start();
            setIsListening(true);
        } catch (error) {
            // Evita errores si ya estaba escuchando
            console.warn("Ya está escuchando o hubo un error:", error);
        }
    };

    // Función para detener la escucha
    const stopListening = () => {
        if (!isSupported || !recognitionRef.current) return;

        try {
            recognitionRef.current.stop();
            setIsListening(false);
        } catch (error) {
            console.warn("Error al detener:", error);
        }
    };

    // Devolvemos siempre el mismo formato para facilitar su uso
    return {
        isSupported,
        isListening,
        startListening: isSupported ? startListening : () => {},
        stopListening: isSupported ? stopListening : () => {}
    };
};

export default useVoiceRecognition;