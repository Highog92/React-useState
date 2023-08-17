import { useState } from "react";

export function SayHello() {
    const [name, setName] = useState("____")

    return (
        <section>

            <h1>Sig hej til {name}</h1>
            <input type="text" onClick={() => setName('Kasper')} />


        </section>

    )

}