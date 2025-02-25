import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </>
    );
};

export default Navbar;
