import styles from "./DisplayColors.module.css";

export const DisplayColors = ({ changeColorCard, handleClickShowColors }) => {
  return (
    <div className={styles.colorsContainer}>
      <button
        type="button"
        className={`${styles.yellowBtn} ${styles.colorSelector}`}
        onClick={() => {
          changeColorCard("yellow");
          handleClickShowColors();
        }}
      ></button>
      <button
        type="button"
        className={`${styles.greenBtn} ${styles.colorSelector}`}
        onClick={() => {
          changeColorCard("green");
          handleClickShowColors();
        }}
      ></button>
      <button
        type="button"
        className={`${styles.pinkBtn} ${styles.colorSelector}`}
        onClick={() => {
          changeColorCard("pink");
          handleClickShowColors();
        }}
      ></button>
      <button
        type="button"
        className={`${styles.purpleBtn} ${styles.colorSelector}`}
        onClick={() => {
          changeColorCard("purple");
          handleClickShowColors();
        }}
      ></button>
      <button
        type="button"
        className={`${styles.blueBtn} ${styles.colorSelector}`}
        onClick={() => {
          changeColorCard("blue");
          handleClickShowColors();
        }}
      ></button>
      <button
        type="button"
        className={`${styles.greyBtn} ${styles.colorSelector}`}
        onClick={() => {
          changeColorCard("grey");
          handleClickShowColors();
        }}
      ></button>
    </div>
  );
};
