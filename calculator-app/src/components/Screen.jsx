import { useEffect, useState } from "react";
import './Screen.css'

function Screen({input}) {
    const [calculation, setCalculation] = useState({
        number: '',
        operator: '',
        total: ''
    })

    useEffect(() => {
        calculate()
        reset()
    },[input])

    function calculate() {
        const num = input.number
        const oper = input.operator

        if (oper === '÷') {
            setCalculation({
                number: num,
                operator: oper,
                total: Number(num.slice(0, -3))
            })
        } else if (oper === '+') {
            setCalculation({
                number: num,
                operator: oper,
                total: Number(num.slice(0, -3))
            })
        } else if (oper === '-') {
            setCalculation({
                number: num,
                operator: oper,
                total: Number(num.slice(0, -3))
            })
        } else if (oper === '+') {
            setCalculation({
                number: num,
                operator: oper,
                total: Number(num.slice(0, -3))
            })
        }
    }

    function reset() {
        if (input.reset) {
            setCalculation({
                number: '',
                operator: '',
                total: ''
            })
        }
    }

    return (
        <section id="screen">
            <div id="running-calc">
                <h3>{calculation.number}{calculation.total}</h3>              
            </div>
            <div id="current-input"><h2>{input.number}</h2></div>
        </section>
    )
}

export default Screen