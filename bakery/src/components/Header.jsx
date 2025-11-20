import Nav from "./Nav.jsx";
function Header() {
  return (
    <header className="w-full bg-(--color-secondary) shadow-md flex items-center justify-between p-8">
      <h1 className="text-base heading-base heading-h1 text-(--color-primary)">
        Bakery++
      </h1>
      <Nav />
    </header>

  );
}

export default Header;