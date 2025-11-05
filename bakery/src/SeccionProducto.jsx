function SeccionProducto(props) {
  const { children } = props;

  return (
    <section className="max-w-[1280px] mx-auto py-6 px-4">
      {children}
    </section>
  );
}

export default SeccionProducto;
