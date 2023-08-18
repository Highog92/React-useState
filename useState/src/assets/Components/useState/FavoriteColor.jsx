import style from '../useState/FavoriteColor.module.scss'
import { useState } from "react";
export function Favorite_Color() {
  const [color, setColor] = useState("_____");

  return (
    <section>

      <h1>My favorite color is {color}!</h1>
      <button className={style.blueButton}
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button className={style.redButton}
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button className={style.greenButton}
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
      <button className={style.pinkButton}
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
    </section>

  )

}