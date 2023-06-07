import { useState } from "react";
import Screen from './Screen.jsx'
import './Numpad.css'

function Numpad() {
    const [input, setInput] = useState({
        number: '0',
        equals: false,
        continueCalc: false,
        reset: false
    })
    const [clear, setClear] = useState('AC')

    const handleClick = event => {
        const button = event.target.outerText
        if (button === 'AC') {
            setInput({
                number: '0',
                equals: false,
                continueCalc: false,
                reset: true
            })
        } else if (button === 'C') {
            setInput({
                number: '0',
                equals: false,
                continueCalc: false,
                reset: false
            })
            setClear('AC')
        } else {
            if (input.continueCalc) {
                setInput({
                    number: event.target.outerText,
                    equals: false,
                    continueCalc: false,
                    reset: true
                })
            } else {
                if (input.number === '0') {
                    setInput({
                        number: event.target.outerText,
                        equals: false,
                        continueCalc: false,
                        reset: false
                    })  
                } else {
                    setInput({
                        number: input.number + event.target.outerText,
                        equals: false,
                        continueCalc: false,
                        reset: false
                    })
                }
                setClear('C')
            }
        }
    }

    const handleOperator = event => {
        const button = event.target.outerText
        if (button === '±') {
            if (!input.number.includes('-')) {
                setInput({
                    number: '-' + input.number,
                    equals: false,
                    continueCalc: false,
                    reset: false
                })
            } else {
                setInput({
                    number: input.number.slice(1),
                    equals: false,
                    continueCalc: false,
                    reset: false
                })
            }
        } else if (button === '%') {
            setInput({
                number: input.number.replace(/\d+$/, (Number(input.number.match(/\d+$/).join('')) * 0.01).toString()),
                equals: false,
                continueCalc: false,
                reset: false
            })
        } else if (button === '.') {
            if (!input.number.includes('.')) {
                if (input.number === '') {
                    setInput({
                        number: '0' + '.',
                        equals: false,
                        continueCalc: false,
                        reset: false
                    })
                } else {
                    setInput({
                        number: input.number + '.',
                        equals: false,
                        continueCalc: false,
                        reset: false
                    })
                }
            }
        } 
        else if (button === '=') {
            setInput({
                number: input.number,
                equals: true,
                continueCalc: false,
                reset: false
            })
        } else {
            if (/[+\-x÷]/.test(input.number[input.number.length - 2])) {
                setInput({
                    number: `${input.number.replace(/[+\-x÷][^+\-x÷]*$/, button)} `,
                    equa: false,
                    continueCalc: false,
                    reset: false
                })
            } else {
                setInput({
                    number: `${input.number} ${button} `,
                    equals: false,
                    continueCalc: false,
                    reset: false
                })
            }
            } 

    }    

    return (
        <>
            <Screen input={input} setInput={setInput}/>
            <form id="numpad">
                <button className="numpad-button symbol" id="clear" type='button' onClick={handleClick}>{clear}</button>
                <button className="numpad-button symbol" id="negative" onClick={handleOperator} type='button'>±</button>
                <button className="numpad-button symbol" id="percent" onClick={handleOperator} type='button'>%</button>
                <button className="numpad-button symbol" id="divide" onClick={handleOperator} type='button'>÷</button>
                <button className="numpad-button" id="seven" onClick={handleClick} type='button'>7</button>
                <button className="numpad-button" id="eight" onClick={handleClick} type='button'>8</button>
                <button className="numpad-button" id="nine" onClick={handleClick} type='button'>9</button>
                <button className="numpad-button symbol" id="multiply" onClick={handleOperator} type='button'>x</button>
                <button className="numpad-button" id="four" onClick={handleClick} type='button'>4</button>
                <button className="numpad-button" id="five" onClick={handleClick} type='button'>5</button>
                <button className="numpad-button" id="six" onClick={handleClick} type='button'>6</button>
                <button className="numpad-button symbol" id="subtract" onClick={handleOperator} type='button'>-</button>
                <button className="numpad-button" id="one" onClick={handleClick} type='button'>1</button>
                <button className="numpad-button" id="two" onClick={handleClick} type='button'>2</button>
                <button className="numpad-button" id="three" onClick={handleClick} type='button'>3</button>
                <button className="numpad-button symbol" id="add" onClick={handleOperator} type='button'>+</button>
                <button className="numpad-button" id="zero" onClick={handleClick} type='button'>0</button>
                <button className="numpad-button symbol" id="decimal" onClick={handleOperator} type='button'>.</button>
                <button className="numpad-button symbol" id="equals" onClick={handleOperator} type='button'>=</button>
            </form>
        </>
        )
}

export default Numpad