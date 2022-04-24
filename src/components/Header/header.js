import React from "react";
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary navbar-fixed px-3 p-3">
                <a className="navbar-brand text-capitalize " href="/">Borche Smileski 193085</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/books"}>Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/categories"}>Categories</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;