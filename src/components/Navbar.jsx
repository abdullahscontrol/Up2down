import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Read</Link>
            <Link to="/About">Watch</Link>
        </div>
    )
}

export default Navbar;