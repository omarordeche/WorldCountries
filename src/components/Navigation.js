import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    <NavLink to='/WorldCountries/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>accueil</li>
                    </NavLink>
                    <NavLink to='/WorldCountries/about' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>à propos</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;