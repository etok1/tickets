import React from "react";
import style from "./style.module.css";

interface CheckBoxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioBox({
  name,
  label,
  checked,
  onChange,
}: CheckBoxProps) {
  return (
    <div className={style.container}>
      <input
        type="radio"
        id={name}
        value={name}
        name="company"
        checked={checked}
        onChange={onChange}
        className={style.input}
      />
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
    </div>
  );
}
