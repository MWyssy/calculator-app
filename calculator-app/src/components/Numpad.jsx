import { useState } from "react";
import Screen from './Screen.jsx'
import './Numpad.css'

function Numpad() {
    const [input, setInput] = useState({
        number: '',
        operator: '',
        reset: false
    })

    const handleClick = event => {
        const button = event.target.outerText
        if (button === 'C') {
            setInput({
                number: '',
                operator: '',
                reset: true
            })
        } else {
            setInput({
                number: input.number + event.target.outerText,
                operator: '',
                reset: false
            })
        }
        if (input.number[input.number.length - 1] === ' ') {
            setInput({
                number: '',
                operator: '',
                reset: false
            })
        }
    }

    const handleOperator = event => {
        const button = event.target.outerText
        if (button === '±') {
            setInput({
                number: '-' + input.number,
                operator: '',
                reset: false
            })
        } else if (button === '%') {
            setInput({
                number: Number(input.number) * 0.01.toString(),
                operator: '',
                reset: false
            })
        } else if (button === '.') {
            if (!input.number.includes('.')) {
                setInput({
                    number: input.number + '.',
                    operator: '',
                    reset: false
                })
            }
        } else if (button === '÷') {
            setInput({
                number: input.number + ' ÷ ',
                operator: '÷',
                reset: false
            })
        } else if (button === 'x') {
            setInput({
                number: input.number + ' x ',
                operator: 'x',
                reset: false
            })
        } else if (button === '-') {
            setInput({
                number: input.number + ' - ',
                operator: '-',
                reset: false
            })
        } else if (button === '+') {
            setInput({
                number: input.number + ' + ',
                operator: '+',
                reset: false
            })
        } 
        
    }    

    return (
        <>
            <Screen input={input}/>
            <form id="numpad">
                <button className="numpad-button symbol" id="cee" type='button' onClick={handleClick}>C</button>
                <button className="numpad-button symbol" onClick={handleOperator} type='button'>±</button>
                <button className="numpad-button symbol" onClick={handleOperator} type='button'>%</button>
                <button className="numpad-button symbol" onClick={handleOperator} type='button'>÷</button>
                <button className="numpad-button" onClick={handleClick} type='button'>7</button>
                <button className="numpad-button" onClick={handleClick} type='button'>8</button>
                <button className="numpad-button" onClick={handleClick} type='button'>9</button>
                <button className="numpad-button symbol" onClick={handleOperator} type='button'>x</button>
                <button className="numpad-button" onClick={handleClick} type='button'>4</button>
                <button className="numpad-button" onClick={handleClick} type='button'>5</button>
                <button className="numpad-button" onClick={handleClick} type='button'>6</button>
                <button className="numpad-button symbol" onClick={handleOperator} type='button'>-</button>
                <button className="numpad-button" onClick={handleClick} type='button'>1</button>
                <button className="numpad-button" onClick={handleClick} type='button'>2</button>
                <button className="numpad-button" onClick={handleClick} type='button'>3</button>
                <button className="numpad-button symbol" onClick={handleOperator} type='button'>+</button>
                <button className="numpad-button" id="zero" onClick={handleClick} type='button'>0</button>
                <button className="numpad-button symbol" onClick={handleOperator} type='button'>.</button>
                <button className="numpad-button symbol" onClick={handleOperator} type='button'>=</button>
            </form>
        </>
        )
}

export default Numpad