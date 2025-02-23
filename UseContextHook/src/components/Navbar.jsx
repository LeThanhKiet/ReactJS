import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
            <div>
                <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                </Link>
            </div>
            <div>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                    Profile
                </Link>
            </div>
            <div>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
