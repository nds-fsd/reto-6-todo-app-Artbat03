import { useEffect } from "react";
import styles from "./card-color-selector.module.css";

export const CardColorSelector = ({ id }) => {
  return (
    <div className={styles.colorsContainer}>
      <button
        className={`${styles.yellowBtn} ${styles.colorSelector}`}
        onClick={() => console.log("yellow")}
      ></button>
      <button
        className={`${styles.greenBtn} ${styles.colorSelector}`}
        onClick={() => console.log("green")}
      ></button>
      <button
        className={`${styles.pinkBtn} ${styles.colorSelector}`}
        onClick={() => console.log("pink")}
      ></button>
      <button
        className={`${styles.purpleBtn} ${styles.colorSelector}`}
        onClick={() => console.log("purple")}
      ></button>
      <button
        className={`${styles.blueBtn} ${styles.colorSelector}`}
        onClick={() => console.log("blue")}
      ></button>
      <button
        className={`${styles.greyBtn} ${styles.colorSelector}`}
        onClick={() => console.log("grey")}
      ></button>
    </div>
  );
};
