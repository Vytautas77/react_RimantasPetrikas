import styles from "./button.module.css";
import { Smooch_Sans } from "next/font/google";

const SmoochSans = Smooch_Sans({ subsets: ["latin"] });

const Button = ({ type, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${styles.button} 
        ${SmoochSans.className} 
        ${type === "Delete" ? styles.delete : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
