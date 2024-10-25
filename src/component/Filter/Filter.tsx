import { useState } from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {
  sortByTransfers,
  sortByPrice,
  sortByDuration,
} from "../../Slices/TicketsSlice";

type ButtonType = "cheapest" | "fastest" | "optimal";

export default function Filter() {
  const dispatch = useDispatch<AppDispatch>();
  const [clickedButton, setClickedButton] = useState<ButtonType | "">("");

  const handleClick = (buttonType: ButtonType) => {
    setClickedButton(buttonType);
    console.log(buttonType);
  };

  const handleSortByTransfers = () => {
    dispatch(sortByTransfers());
  };

  const handleSortByDuration = () => {
    dispatch(sortByDuration());
  };

  const handleSortByPrice = () => {
    dispatch(sortByPrice());
  };

  return (
    <div className={style.container}>
      <button
        className={`${style.button} ${
          clickedButton === "cheapest" ? style.active : undefined
        }`}
        onClick={() => {
          handleClick("cheapest");
          handleSortByPrice();
        }}
      >
        Самый дешевый
      </button>

      <button
        className={`${style.button} ${
          clickedButton === "fastest" ? style.active : undefined
        }`}
        onClick={() => {
          handleClick("fastest");
          handleSortByDuration();
        }}
      >
        Самый быстрый
      </button>

      <button
        className={`${style.button} ${
          clickedButton === "optimal" ? style.active : undefined
        }`}
        onClick={() => {
          handleClick("optimal");
          handleSortByTransfers();
        }}
      >
        Самый оптимальный
      </button>
    </div>
  );
}
