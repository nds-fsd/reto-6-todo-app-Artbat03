import styles from "./card-color-selector.module.css";

export const CardColorSelector = ({ id }) => {
  return (
    <div className={styles.colorsContainer}>
      <button className={styles.yellowBtn}></button>
      <button className={styles.greenBtn}></button>
      <button className={styles.pinkBtn}></button>
      <button className={styles.purpleBtn}></button>
      <button className={styles.blueBtn}></button>
      <button className={styles.greyBtn}></button>
    </div>
  );
};
