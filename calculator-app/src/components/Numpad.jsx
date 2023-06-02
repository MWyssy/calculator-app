import { useState } from "react";
import Screen from './Screen.jsx'
import './Numpad.css'

function Numpad() {
    const [input, setInput] = useState('')

    function handleClick(event) {
        setInput(event.target.value)
    }
    
    console.log(input)

    return (
        <>
            <Screen />
            <form id="numpad">
                <button className="numpad-button symbol" id="cee" type='submit' onSubmit={handleClick}>C</button>
                <button className="numpad-button symbol" onClick={handleClick}>±</button>
                <button className="numpad-button symbol" onClick={handleClick}>%</button>
                <button className="numpad-button symbol" onClick={handleClick}>÷</button>
                <button className="numpad-button" onClick={handleClick}>7</button>
                <button className="numpad-button" onClick={handleClick}>8</button>
                <button className="numpad-button" onClick={handleClick}>9</button>
                <button className="numpad-button symbol" onClick={handleClick}>x</button>
                <button className="numpad-button" onClick={handleClick}>4</button>
                <button className="numpad-button" onClick={handleClick}>5</button>
                <button className="numpad-button" onClick={handleClick}>6</button>
                <button className="numpad-button symbol" onClick={handleClick}>-</button>
                <button className="numpad-button" onClick={handleClick}>1</button>
                <button className="numpad-button" onClick={handleClick}>2</button>
                <button className="numpad-button" onClick={handleClick}>3</button>
                <button className="numpad-button symbol" onClick={handleClick}>+</button>
                <button className="numpad-button" id="zero" onClick={handleClick}>0</button>
                <button className="numpad-button symbol" onClick={handleClick}>.</button>
                <button className="numpad-button symbol" onClick={handleClick}>=</button>
            </form>
        </>
        )
}

export default Numpad