import { useId } from "react";

/**
 * Generic Section Component
 */
function Section({ title, children }) {
  const titleId = useId();

  return (
    <section aria-labelledby={titleId} className="section">
      <header className="section__header">
        <h2 id={titleId} className="section__title">
          {title}
        </h2>
      </header>

      {children}
    </section>
  );
}

export default Section;
