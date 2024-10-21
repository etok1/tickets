import RadioBox from "./RadioBox/RadioBox";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { filterByAirline } from "../../Slices/TicketsSlice";

const labels = ["Победа", "Red Wings", "S7 Airlines"];

export default function Companies() {
  const dispatch = useDispatch<AppDispatch>();

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.value;
    dispatch(filterByAirline(selectedOption));
  };

  return (
    <div className={style.container}>
      <h2>Компании</h2>
      {labels.map((label, index) => (
        <RadioBox
          key={index}
          name={label}
          label={label}
          onChange={handleFilter}
        />
      ))}
    </div>
  );
}
