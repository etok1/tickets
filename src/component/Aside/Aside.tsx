import style from "./style.module.css";
import Transfers from "../Transfers/Transfers";
import Companies from "../Companies/Companies";

export default function Aside() {
  return (
    <aside className={style.aside}>
      <Transfers />
      <Companies />
    </aside>
  );
}
