import React, { useState } from "react";
import RadioBox from "./RadioBox/RadioBox";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { filterByAirline } from "../../Slices/TicketsSlice";

const labels = ["Победа", "Red Wings", "S7 Airlines"];

export default function Companies() {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedAirline, setSelectedAirline] = useState<string | null>(null);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedAirline = event.target.checked ? event.target.value : null;
    setSelectedAirline(selectedAirline);
    dispatch(filterByAirline(selectedAirline));
  };

  return (
    <div className={style.container}>
      <h2>Компании</h2>
      {labels.map((label, index) => (
        <RadioBox
          key={index}
          name={label}
          label={label}
          checked={selectedAirline === label}
          onChange={handleFilter}
        />
      ))}
    </div>
  );
}
