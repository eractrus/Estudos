import React from "react";
import './Header.css'

export default () => {

    return (
        <header className="Menu">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/param/Andressa">Param 01</a></li>
                    <li><a href="/param/Eractrus">Param 02</a></li>
                    <li><a href="/noExist">Page 404</a></li>
                </ul>
            </nav>
        </header>
    )
}