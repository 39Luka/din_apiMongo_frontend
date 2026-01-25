/**
 * Spinner Component
 * 
 * Provides a visual indicator for loading states.
 * 
 * @param {Object} props
 * @param {"small" | "large"} [props.size="large"] - Size of the spinner.
 */
function Spinner({ size = "large" }) {
  const className = size === "small" ? "spinner-small" : "spinner";
  return <span className={className} role="status" aria-label="Cargando"></span>;
}

export default Spinner;
