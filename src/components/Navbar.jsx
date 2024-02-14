import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" id="link">Read</Link>
            <Link to="/Audio" id="link">Audio</Link>
            <Link to="/About" id="link">Watch</Link>
        </div>
    )
}

export default Navbar;