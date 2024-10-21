import { useState } from "react";
import style from "./style.module.css";

type ButtonType = "cheapest" | "fastest" | "optimal";

export default function Filter() {
  const [clickedButton, setClickedButton] = useState<ButtonType | "">("");

  const handleClick = (buttonType: ButtonType) => {
    setClickedButton(buttonType);
    console.log(buttonType);
  };

  return (
    <>
      <button
        className={`${style.button} ${
          clickedButton === "cheapest" ? style.active : undefined
        }`}
        onClick={() => handleClick("cheapest")}
      >
        Самый дешевый
      </button>

      <button
        className={`${style.button} ${
          clickedButton === "fastest" ? style.active : undefined
        }`}
        onClick={() => handleClick("fastest")}
      >
        Самый быстрый
      </button>

      <button
        className={`${style.button} ${
          clickedButton === "optimal" ? style.active : undefined
        }`}
        onClick={() => handleClick("optimal")}
      >
        Самый оптимальный
      </button>
    </>
  );
}
