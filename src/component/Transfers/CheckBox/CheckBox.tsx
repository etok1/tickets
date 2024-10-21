import React, { useState } from "react";
import style from "./style.module.css";

interface CheckBoxProps {
  name: string;
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckBox({
  name,
  label,
  value,
  onChange,
}: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevCheck) => !prevCheck);
  };

  return (
    <div className={style.container}>
      <input
        type="checkbox"
        id={name}
        value={value}
        name="transfers"
        checked={isChecked}
        onChange={(e) => {
          handleCheckboxChange();
          onChange(e);
        }}
        className={style.input}
      />
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
    </div>
  );
}
