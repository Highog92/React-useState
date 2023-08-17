import { useState } from "react";
export function Favorite_Color() {
  const [color, setColor] = useState("_____");

  return (
    <section>

      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
    </section>

  )

}