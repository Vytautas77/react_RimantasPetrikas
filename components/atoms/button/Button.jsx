import styles from "./button.module.css";
import { Smooch_Sans } from "next/font/google";

const SmoochSans = Smooch_Sans({ subsets: ["latin"] });

const Button = () => {
  return (
    <button className={`${styles.button} ${SmoochSans.className}`}>
      Login
    </button>
  );
};

const ButtonAdd = ({ onclick }) => {
  return (
    <button
      className={`${styles.button} ${SmoochSans.className}`}
      onClick={onclick}
    >
      Add new album
    </button>
  );
};

const ButtonDel = ({ type, onClick }) => {
  return (
    <button
      className={`${styles.button} ${SmoochSans.className} ${
        type === "Delete" && styles.delete
      }`}
      onClick={onClick}
    >
      DELETE
    </button>
  );
};

const ButtonSend = ({ type, onClick }) => {
  return (
    <button
      type="submit"
      className={`${styles.button} ${SmoochSans.className}`}
      onClick={onClick}
    >
      SEND
    </button>
  );
};

export { Button, ButtonDel, ButtonAdd, ButtonSend };
