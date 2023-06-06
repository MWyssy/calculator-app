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
        const current = calculation[calculation.length - 1]
        const calculate = number
            .split('')
            .map((char) => {
                return char === 'x' ? '*'
                    : char === '÷' ? '/'
                    : char
            })
            .join('')
            .split(/\s*(?=[+\-/*=])\s*/)

        function maths(array) {
            let num1 = Number(array[0]);
            let result = 0;

            const bodmas = array.sort((a, b) => {
              const order = { "/": 1, "*": 2, "+": 3, "-": 4 };
              const operatorA = a.trim().charAt(0);
              const operatorB = b.trim().charAt(0);
          
              return order[operatorA] - order[operatorB];
            });
          
            for (let i = 1; i < bodmas.length; i++) {
              const mathsArray = bodmas[i].split(" ");
              const operator = mathsArray[0];
              const num2 = Number(mathsArray[1]);
          
              result =
                operator === "+"
                  ? num1 + num2
                  : operator === "-"
                  ? num1 - num2
                  : operator === "/"
                  ? num1 / num2
                  : num1 * num2;
              num1 = result;
            }
            return result;
          }

        if (input.equals) {
                setCalculation(
                    [   
                        ...calculation,
                        {
                            calc: calculate
                                    .join(' ')
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


    //     else if (oper === '=') {         
    //             if (current.oper === '+') {
    //                 setCalculation([
    //                     ...calculation,
    //                     {   
    //                         num1: current.total.slice(3),
    //                         oper: current.oper,
    //                         num2: number ? number : current.num2,
    //                         total: ` = ${(Number(current.total.slice(3)) + Number(number ? number : current.num2)).toString()}`
    //                     }
    //                 ])
    //                 setInput({
    //                     number: '',
    //                     equals: false,
    //                     reset: false
    //                 })
    //             } else if (current.oper === '-') {
    //                 setCalculation([
    //                     ...calculation,
    //                     {   
    //                         num1: current.total.slice(3),
    //                         oper: current.oper,
    //                         num2: number ? number : current.num2,
    //                         total: ` = ${(Number(current.total.slice(3)) - Number(number ? number : current.num2)).toString()}`
    //                     }
    //                 ])
    //                 setInput({
    //                     number: '',
    //                     equals: false,
    //                     reset: false
    //                 })
    //             } else if (current.oper === 'x') {
    //                 setCalculation([
    //                     ...calculation,
    //                     {   
    //                         num1: current.total.slice(3),
    //                         oper: current.oper,
    //                         num2: number ? number : current.num2,
    //                         total: ` = ${(Number(current.total.slice(3)) * Number(number ? number : current.num2)).toString()}`
    //                     }
    //                 ])
    //                 setInput({
    //                     number: '',
    //                     equals: false,
    //                     reset: false
    //                 })
    //             } else if (current.oper === '÷') {
    //                 setCalculation([
    //                     ...calculation,
    //                     {   
    //                         num1: current.total.slice(3),
    //                         oper: current.oper,
    //                         num2: number ? number : current.num2,
    //                         total: ` = ${(Number(current.total.slice(3)) / Number(number ? number : current.num2)).toString()}`
    //                     }
    //                 ])
    //                 setInput({
    //                     number: '',
    //                     equals: false,
    //                     reset: false
    //                 })
    //             }
    //         }
    //     } else {
    //         if (current.total !== '') {
    //             if (oper === '+') {
    //                 setCalculation([
    //                     ...calculation,
    //                     {   
    //                         num1: current.total.slice(3),
    //                         oper: oper,
    //                         num2: '',
    //                         total: ''
    //                     }
    //                 ])
    //                 setInput({
    //                     number: '',
    //                     equals: false,
    //                     reset: false
    //                 })
    //             } else if (oper === '-') {
    //                 setCalculation([
    //                     ...calculation,
    //                     {   
    //                         num1: current.total.slice(3),
    //                         oper: oper,
    //                         num2: '',
    //                         total: ''
    //                     }
    //                 ])
    //                 setInput({
    //                     number: '',
    //                     equals: false,
    //                     reset: false
    //                 })
    //             } else if (oper === 'x') {
    //                 setCalculation([
    //                     ...calculation,
    //                     {   
    //                         num1: current.total.slice(3),
    //                         oper: oper,
    //                         num2: '',
    //                         total: ''
    //                     }
    //                 ])
    //                 setInput({
    //                     number: '',
    //                     equals: false,
    //                     reset: false
    //                 })
    //             } else if (oper === '÷') {
    //                 setCalculation([
    //                     ...calculation,
    //                     {   
    //                         num1: current.total.slice(3),
    //                         oper: oper,
    //                         num2: '',
    //                         total: ''
    //                     }
    //                 ])
    //                 setInput({
    //                     number: '',
    //                     equals: false,
    //                     reset: false
    //                 })
    //             } else if (/[0-9.]/.test(input.number)){
    //                 setCalculation([])
    //             }
    //         } 
    //     } 
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