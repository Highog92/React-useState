import style from '../useState/DarkMode.module.scss'
import { useState } from 'react'

export function DarkMode() {

    const [isDarkMode, setIsDarkMode] = useState(false)

    console.log("isDarkMode: ", isDarkMode);

    function switchDarkMode() {
        if (isDarkMode) {

            setIsDarkMode(false)
        }

        else {
            setIsDarkMode(true)
        }
    }
    return (
        <section className={isDarkMode ? style.darkStyle : style.lightStyle}>
            <h3>Hej, tryk på knappen for at skifte til darkmode :)</h3>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                quibusdam tenetur necessitatibus aut! Rem porro fugiat, nulla
                doloremque maiores illo maxime eum cumque repellat reiciendis
                repellendus, ipsa, nobis quaerat. Incidunt, maxime aliquam ullam aliquid odio maiores sunt,
                magnam quae asperiores ducimus architecto! Quidem illo voluptates sequi
                nesciunt esse exercitationem iusto quasi! Accusantium nisi dolor
            </p>
            <button className={isDarkMode ? style.buttonDarkStyle : style.buttonLightStyle} onClick={() => setIsDarkMode(isDarkMode == true ? false : true)}>
                {isDarkMode ? "Dark mode" : "Light mode"}

            </button>
        </section >

    )

}
