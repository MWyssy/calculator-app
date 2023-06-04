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
        const oper = input.operator
        const current = calculation[calculation.length - 1]

        if (oper && (calculation.length && calculation[calculation.length - 1].oper === '') || !calculation.length && oper !== '=') {
                setCalculation(
                    [
                        {
                            num1: number.slice(0, -3),
                            oper: oper,
                            num2: '',
                            total: ''
                        }
                    ]
                ) 
                setInput({
                    number: '',
                    operator: oper,
                    reset: false
                })
        } else if (oper === '=') {
            if (current.total === '') {
                if (current.oper === '+') {
                    setCalculation(
                        calculation.slice(0, calculation.length - 1).concat(
                        {
                            num1: current.num1,
                            oper: current.oper,
                            num2: number,
                            total: ` = ${(Number(current.num1) + Number(number)).toString()}`
                        })
                    )
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                } else if (current.oper === '-') {
                    setCalculation(
                        calculation.slice(0, calculation.length - 1).concat(
                        {
                            num1: current.num1,
                            oper: current.oper,
                            num2: number,
                            total: ` = ${(Number(current.num1) - Number(number)).toString()}`
                        })
                    )
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                } else if (current.oper === 'x') {
                    setCalculation(
                        calculation.slice(0, calculation.length - 1).concat(
                        {
                            num1: current.num1,
                            oper: current.oper,
                            num2: number,
                            total: ` = ${(Number(current.num1) * Number(number)).toString()}`
                        })
                    )
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                } else if (current.oper === '÷') {
                    setCalculation(
                        calculation.slice(0, calculation.length - 1).concat(
                        {
                            num1: current.num1,
                            oper: current.oper,
                            num2: number,
                            total: ` = ${(Number(current.num1) / Number(number)).toString()}`
                        })
                    )
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                }

            } else {
                if (current.oper === '+') {
                    setCalculation([
                        ...calculation,
                        {   
                            num1: current.total.slice(3),
                            oper: current.oper,
                            num2: number ? number : current.num2,
                            total: ` = ${(Number(current.total.slice(3)) + Number(number ? number : current.num2)).toString()}`
                        }
                    ])
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                } else if (current.oper === '-') {
                    setCalculation([
                        ...calculation,
                        {   
                            num1: current.total.slice(3),
                            oper: current.oper,
                            num2: number ? number : current.num2,
                            total: ` = ${(Number(current.total.slice(3)) - Number(number ? number : current.num2)).toString()}`
                        }
                    ])
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                } else if (current.oper === 'x') {
                    setCalculation([
                        ...calculation,
                        {   
                            num1: current.total.slice(3),
                            oper: current.oper,
                            num2: number ? number : current.num2,
                            total: ` = ${(Number(current.total.slice(3)) * Number(number ? number : current.num2)).toString()}`
                        }
                    ])
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                } else if (current.oper === '÷') {
                    setCalculation([
                        ...calculation,
                        {   
                            num1: current.total.slice(3),
                            oper: current.oper,
                            num2: number ? number : current.num2,
                            total: ` = ${(Number(current.total.slice(3)) / Number(number ? number : current.num2)).toString()}`
                        }
                    ])
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                }
            }
        } else {
            if (current.total !== '') {
                if (oper === '+') {
                    setCalculation([
                        ...calculation,
                        {   
                            num1: current.total.slice(3),
                            oper: oper,
                            num2: '',
                            total: ''
                        }
                    ])
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                } else if (oper === '-') {
                    setCalculation([
                        ...calculation,
                        {   
                            num1: current.total.slice(3),
                            oper: oper,
                            num2: '',
                            total: ''
                        }
                    ])
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                } else if (oper === 'x') {
                    setCalculation([
                        ...calculation,
                        {   
                            num1: current.total.slice(3),
                            oper: oper,
                            num2: '',
                            total: ''
                        }
                    ])
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                } else if (oper === '÷') {
                    setCalculation([
                        ...calculation,
                        {   
                            num1: current.total.slice(3),
                            oper: oper,
                            num2: '',
                            total: ''
                        }
                    ])
                    setInput({
                        number: '',
                        operator: '',
                        reset: false
                    })
                } else if (/[0-9.]/.test(input.number)){
                    setCalculation([])
                }
            } 
        } 
    }

    function reset() {
        if (input.reset) {
            setCalculation([])
        }
    }

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
                                    <li key={index}>{calc.num1} {calc.oper} {calc.num2} {calc.total}</li>
                                )
                            })} 
                            <li ref={listRef}></li>
                        </ul>
                        : ''
                    }              
            </div>
            <div id="current-input"><h2>{input.number}</h2></div>
        </section>
    )
}

export default Screen