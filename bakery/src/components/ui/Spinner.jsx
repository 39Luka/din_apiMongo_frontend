function Spinner({ size = "small" }) {
  const className = size === "small" ? "spinner-small" : "spinner";
  return <span className={className}></span>;
}

export default Spinner;
