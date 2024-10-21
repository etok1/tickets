import CheckBox from "./CheckBox/CheckBox";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { filterByTransfers } from "../../Slices/TicketsSlice";

const labels = ["Без пересадок", "1 пересадкa", "2 пересадки", "3 пересадки"];

const connections = [0, 1, 2, 3];

export default function Transfers() {
  const dispatch = useDispatch<AppDispatch>();

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = Number(event.target.value);
    dispatch(filterByTransfers(selectedOption));
  };

  return (
    <div className={style.container}>
      <h2>Количество пересадок</h2>
      {labels.map((label, index) => (
        <CheckBox
          key={index}
          name={label}
          label={label}
          value={connections[index]}
          onChange={handleFilter}
        />
      ))}
    </div>
  );
}
