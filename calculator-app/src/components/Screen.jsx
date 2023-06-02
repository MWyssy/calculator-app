import { useState } from "react";
import './Screen.css'

function Screen() {
    return (
        <section id="screen">
            <div id="running-calc">
                <h3>123456 + 6789 = 130245</h3>              
            </div>
            <div id="current-input"><h2>123456</h2></div>
        </section>
    )
}

export default Screen