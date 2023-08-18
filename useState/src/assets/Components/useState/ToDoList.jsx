import { useState } from "react"

export function TodoList() {

    const [todoArray, setTodoArray] = useState(['Kode en todo app', 'Lav stylesheet'])

    const addToArray = () => {
        let clone = [...todoArray]
        clone.push('new item')
        console.log('clone', clone);


    }

    return (
        <section>
            {todoArray.map((item, index) => {
                return
                <p key={index}>{item}</p>
            })}

            <button onClick={addToArray}>Add to Array</button>



        </section>

    )

}
