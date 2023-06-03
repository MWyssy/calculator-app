import { useEffect, useState } from "react";
import './Screen.css'

function Screen({input}) {
    const [calculation, setCalculation] = useState([])

    useEffect(() => {
        calculate()
        reset()
    },[input])

    function calculate() {
        const num1 = input.number
        const oper = input.operator

        if (oper && (calculation.length && calculation[calculation.length - 1].oper === '') || !calculation.length && oper !== '=') {
                setCalculation(
                    [
                        ...calculation,
                        {
                            num1: num1.slice(0, -3),
                            oper: oper,
                            num2: '',
                            total: ''
                        }
                    ]
                ) 
        } else if (oper && calculation.length && calculation[calculation.length - 1].oper !== '') {
            let current = calculation[calculation.length - 1]
            if (oper !== '=') {
                // setCalculation(
                //     current = {
                //         ...current,
                //         num2: num1.slice(0, -3),
                //         total: current.num1 + current.num2
                //     }
                // )
            } else {
                setCalculation([
                    ...calculation,
                    {
                        num1: current.num1,
                        oper: current.oper,
                        num2: num1.slice(0, -3),
                        total: ` = ${(Number(current.num1) + Number(num1.slice(0, -3))).toString()}`
                    }
                ])
            }
        }

    }

    function reset() {
        if (input.reset) {
            setCalculation({
                num1: '',
                num2: '',
                operator: '',
                total: ''
            })
        }
    }

    return (
        <section id="screen">
            <div id="running-calc">
                <h3>
                    {
                        calculation.length ?
                        <ul id="calc-list">
                            {calculation.map((calc, index) => {
                                return (
                                    <li key={index}>{calc.num1} {calc.oper} {calc.num2} {calc.total}</li>
                                )
                            })} 
                        </ul>
                        : ''
                    }
                </h3>              
            </div>
            <div id="current-input"><h2>{input.number}</h2></div>
        </section>
    )
}

export default Screen