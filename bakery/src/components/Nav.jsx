import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="flex gap-6">
            <Link className="px-4 py-2 text-base text-bold text-large text-black hover:bg-(--color-primary) hover:rounded hover:text-white" to="/home">Home</Link>
            <Link className="px-4 py-2 text-base text-bold text-large text-black hover:bg-(--color-primary) hover:rounded hover:text-white" to="/productos">Productos</Link>
        </nav>

    );
}

export default Nav;