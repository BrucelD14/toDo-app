import React from "react";
import styles from "../styles/modules/todoItem.module.scss";

function Checkbutton() {
  return (
    <div className={styles.svgBox}>
      <svg viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
        <path
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </div>
  );
}

export default Checkbutton;
