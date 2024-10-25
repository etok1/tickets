import style from "./style.module.css";
import Transfers from "../Transfers/Transfers";
import Companies from "../Companies/Companies";
import { useEffect, useState } from "react";

export default function MobileAside() {
  const [opened, setOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 431);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 431);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  return (
    <div className={style.aside}>
      <div className={style.heading}>
        <h2>
          {isMobile
            ? "Любая авиакомпания, пересадок: 0, 1, 2"
            : "Любая авиакомпания, любое кол-во пересадок"}
        </h2>
        <p onClick={handleClick}>
          {isMobile ? "" : "  Открыть настройки"}

          <span
            className={style.arrow}
            style={{
              transition: "transform 0.3s ease",
              transform: opened ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
              style={{ display: "block" }}
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </span>
        </p>
      </div>
      <div
        className={style.filter}
        style={{
          transition: "all 0.3s ease",
          maxHeight: opened ? "500px" : "0px",
          opacity: opened ? 1 : 0,
          overflow: "hidden",
        }}
      >
        {" "}
        <Companies /> <Transfers />
      </div>
    </div>
  );
}
