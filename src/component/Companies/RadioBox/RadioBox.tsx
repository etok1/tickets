import React, { useState } from "react";
import style from "./style.module.css";

interface CheckBoxProps {
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioBox({ name, label, onChange }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioboxChange = () => {
    setIsChecked((prevCheck) => !prevCheck);
  };

  return (
    <div className={style.container}>
      <input
        type="radio"
        id={name}
        value={name}
        name="company"
        checked={isChecked}
        onChange={(e) => {
          handleRadioboxChange();
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
