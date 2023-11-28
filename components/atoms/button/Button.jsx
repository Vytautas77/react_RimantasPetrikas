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

export default Button;
