import React from "react";
import styles from "../styles/modules/modal.module.scss";
import {MdOutlineClose} from 'react-icons/md';

function TodoModal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButton}>
        <MdOutlineClose></MdOutlineClose>
        </div>
        <h1>TODO MODAL</h1>
      </div>
    </div>
  );
}

export default TodoModal;
