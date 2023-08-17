import { useState } from "react"


export function Calculator() {
    const [result, setResult] = useState(0)
    const [valueOne, setValueOne] = useState(0)
    const [valueTwo, setValueTwo] = useState(0)


    const add = () => {
        const res = Number(valueOne) + Number(valueTwo)
        setResult(res)

    }
    console.log(valueOne);
    const subtract = () => {
        const res = Number(valueOne) - Number(valueTwo)
        setResult(res)
    
    }

    const multiply = () => {
        const res = Number(valueOne) * Number(valueTwo)
        setResult(res)

    }
    const divide = () => {
        const res = Number(valueOne) / Number(valueTwo)
        setResult(res)

    }

    return (
        <>
            <h3>Result: {result} </h3>
            <input onChange={(event) => setValueOne(event.target.value)} value={valueOne} type="number" placeholder="Value 1" />
            <input onChange={(event) => setValueTwo(event.target.value)} value={valueTwo} type="number" placeholder="Value 2" />
            <button onClick={subtract}>-</button>
            <button onClick={add}>+</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>

        </>

    )

}
