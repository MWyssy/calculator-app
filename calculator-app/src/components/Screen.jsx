import { useState } from "react";
import './Screen.css'

function Screen() {
    return (
        <section id="screen">
            <div id="running-calc"><p>123456+6789</p></div>
            <div id="current-input"><p>123456</p></div>
        </section>
    )
}

export default Screen