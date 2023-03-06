import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = (props) => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const logoNav = require("./logo_transparent.png");

    const handleLogger = () => {
        if(props.isAuthenticated) {
            return logout();
        } 
        return loginWithRedirect();
    }
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="home-nav-link"><img src={logoNav} alt="logo" className="logo-nav-img"/></Link>
                <button className="logger-button" onClick={handleLogger}>{props.isAuthenticated ? `Sign out` : 'Sign in'}</button>
                {props.isAuthenticated ? <h1>Hello, {props.user}!</h1> : null}
                <ul>
                    <li><Link to='/Meal' className="nav-link">Random Selector</Link></li>
                    <li><Link to="/Category" className="nav-link">Search by Categories</Link></li>
                    <li><Link to='/Search' className="nav-link">Search by ID #</Link></li>
                </ul>
            </nav>
        </div>
    )
}
