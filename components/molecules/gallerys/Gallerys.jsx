import Styles from "./gallerys.module.css";
import Spinner from "@/components/atoms/spinner/Spinner";

const Gallerys = () => {
  return (
    <div className={Styles.wrapper}>
      <h1>Puslapis kuriamas</h1>
      <div className={Styles.spinner}>
        <Spinner />
      </div>
    </div>
  );
};

export default Gallerys;
