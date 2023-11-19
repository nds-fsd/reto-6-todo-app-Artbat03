import styles from "./card-color-selector.module.css";
import { useForm } from "react-hook-form";

export const CardColorSelector = ({ id, changeColorCard, onSumbit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  return (
    <form className={styles.colorsContainer} {...register("color")}>
      <button
        className={`${styles.yellowBtn} ${styles.colorSelector}`}
        value={"yellow"}
        onClick={(event) => {
          changeColorCard(event.target.value);
          setValue("color", { color: event.target.value });
          handleSubmit(onSumbit);
        }}
      ></button>
      <button
        className={`${styles.greenBtn} ${styles.colorSelector}`}
        onSubmit={handleSubmit(onSumbit)}
        value={"green"}
        onClick={(event) => {
          changeColorCard(event.target.value);
        }}
      ></button>
      <button
        className={`${styles.pinkBtn} ${styles.colorSelector}`}
        onSubmit={handleSubmit(onSumbit)}
        value={"pink"}
        onClick={(event) => {
          changeColorCard(event.target.value);
        }}
      ></button>
      <button
        className={`${styles.purpleBtn} ${styles.colorSelector}`}
        onSubmit={handleSubmit(onSumbit)}
        value={"purple"}
        onClick={(event) => {
          changeColorCard(event.target.value);
        }}
      ></button>
      <button
        className={`${styles.blueBtn} ${styles.colorSelector}`}
        onSubmit={handleSubmit(onSumbit)}
        value={"blue"}
        onClick={(event) => {
          changeColorCard(event.target.value);
        }}
      ></button>
      <button
        className={`${styles.greyBtn} ${styles.colorSelector}`}
        onSubmit={handleSubmit(onSumbit)}
        value={"grey"}
        onClick={(event) => {
          changeColorCard(event.target.value);
        }}
      ></button>
    </form>
  );
};
