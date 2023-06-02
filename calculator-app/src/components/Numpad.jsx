import { useState } from "react";
import Screen from './Screen.jsx'
import './Numpad.css'

function Numpad() {
    return (
        <>
            <Screen />
            <form id="numpad">
                <button className="numpad-button symbol" id="cee">C</button>
                <button className="numpad-button symbol">±</button>
                <button className="numpad-button symbol">%</button>
                <button className="numpad-button symbol">÷</button>
                <button className="numpad-button">7</button>
                <button className="numpad-button">8</button>
                <button className="numpad-button">9</button>
                <button className="numpad-button symbol">x</button>
                <button className="numpad-button">4</button>
                <button className="numpad-button">5</button>
                <button className="numpad-button">6</button>
                <button className="numpad-button symbol">-</button>
                <button className="numpad-button">1</button>
                <button className="numpad-button">2</button>
                <button className="numpad-button">3</button>
                <button className="numpad-button symbol">+</button>
                <button className="numpad-button" id="zero">0</button>
                <button className="numpad-button symbol">.</button>
                <button className="numpad-button symbol">=</button>
            </form>
        </>
        )
}

export default Numpad