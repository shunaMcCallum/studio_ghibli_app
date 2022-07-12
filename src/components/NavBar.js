import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {


    return (
        <div className="nav-bar-container">

            <div className="nav-bar-list-container">
                <ul className="nav-bar-list">
                    <li>
                        <div className="link">
                            <Link to="/">Home</Link>
                        </div>
                    </li>

                    <li>
                        <div className="link">
                            <Link to="/films">Films</Link>
                        </div>
                    </li>

                    <li>
                        <div className="link">
                            <Link to="/charts">Charts</Link>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="nav-bar-header-container">
                <div className='empty-div'>
                </div>
                <div className="nav-bar-header">
                    <div>
                        <h2> 株式会社スタジオジブリ </h2>
                        <h1> Studio Ghibli </h1>
                    </div>
                </div>
                <div className="nav-bar-img">
                    <img src="https://cdn.imgbin.com/1/10/16/imgbin-ghibli-museum-catbus-studio-ghibli-my-neighbor-totoro-chihiro-vW4exxrSkvXMRTkq5T2uUk311.jpg" />
                </div>
            </div>

        </div>
    )
}

export default NavBar;