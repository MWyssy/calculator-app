import { useEffect, useState, useRef } from "react";
import './Screen.css'

function Screen({input, setInput}) {
    const [calculation, setCalculation] = useState([])

    useEffect(() => {
        calculate()
        reset()
    },[input])

    function calculate() {
        const number = input.number
        const calc = calculation[calculation.length - 1];
        const current = calculation.length > 0 
            ? `${number}${calc.calc.replace(/-?\d*\.?\d+/, "")}`
                .split('')
                .map((char) => {
                    return char === 'x' ? '*'
                        : char === '÷' ? '/'
                        : char
                })
                .join('')
            : ''
        const calculate = number
            .split('')
            .map((char) => {
                return char === 'x' ? '*'
                    : char === '÷' ? '/'
                    : char
            })
            .join('')

        function maths(str) {
            return Function(`'use strict'; return (${str})`)()
        }

        if (input.equals && !/[+\-x÷]/.test(input.number)) {
            setCalculation(
                [
                    ...calculation,
                    {
                        calc: current
                            .split('')
                            .map((char) => {
                                return char === '*' ? 'x'
                                    : char === '/' ? '÷'
                                    : char
                            })
                            .join(''),
                        total: `= ${maths(current)}`
                    }
                ]
            )
            setInput({
                number: maths(current).toString(),
                equals: false,
                continueCalc: true,
                reset: false
            })
        } else if (input.equals) {
                setCalculation(
                    [   
                        ...calculation,
                        {
                            calc: calculate
                                    .split('')
                                    .map((char) => {
                                        return char === '*' ? 'x'
                                            : char === '/' ? '÷'
                                            : char
                                    })
                                    .join(''),
                            total: `= ${maths(calculate)}`
                        }
                    ]
                ) 
                setInput({
                    number: maths(calculate).toString(),
                    equals: false,
                    continueCalc: true,
                    reset: false
                })
        } 
    }

    function reset() {
        if (input.reset) {
            setCalculation([])
        }
    }

    const isOverflown = ({ clientHeight, scrollHeight }) => scrollHeight > clientHeight

    const resizeText = ({ element, elements, minSize = 10, maxSize = 512, step = 1, unit = 'px' }) => {
        (elements || [element]).forEach(el => {
            let i = minSize
            let overflow = false

                const parent = el.parentNode

            while (!overflow && i < maxSize) {
                el.style.fontSize = `${i}${unit}`
                overflow = isOverflown(parent)

            if (!overflow) i += step
            }

            el.style.fontSize = `${i - step}${unit}`
        })
    }

      
    resizeText({
        elements: document.querySelectorAll('#number'),
        step: 0.5
    })
      

    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollIntoView({ behavior: 'smooth', block: 'end'});
        }
    }, [calculation])

    return (
        <section id="screen">
            <div id="running-calc">
                    {
                        calculation.length ?
                        <ul id="calc-list">
                            {calculation.map((calc, index) => {
                                return (
                                    <li key={index}>{calc.calc} {calc.total}</li>
                                )
                            })} 
                            <li ref={listRef}></li>
                        </ul>
                        : ''
                    }              
            </div>
            <div id="display"><h2 id="number">{input.number}</h2></div>
        </section>
    )
}

export default Screen