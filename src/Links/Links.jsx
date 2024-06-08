import React from 'react';
import {Link} from "react-router-dom";
import './Links.css';

export default function Links() {

    return (
        <>

            <header className="header">
                <nav className="nav">
                    <ul className="ul__link">
                        <li className="nav__li"> <Link to="/">Home</Link> </li>
                        <li className="nav__li"> <Link to="/descr">Description</Link> </li>
                        <li className="nav__li"> <Link to="/calendar">Calendar</Link>< /li>
                    </ul>
                </nav>
            </header>


        </>
    );
}
