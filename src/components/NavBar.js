import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {


    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/films">Films</Link>
                    </li>

                    <li>
                        <Link to="/charts">Charts</Link>
                    </li>
                </ul>
            </div>

            <div>
                <header>
                    <h1>
                       The Films of Studio Ghibli
                    </h1>
                </header>
            </div>
        </div>
    )
}

export default NavBar;