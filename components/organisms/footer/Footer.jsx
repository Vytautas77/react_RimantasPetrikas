import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={Styles.wrapper}>
      <div>Tekstas</div>
      <p> &copy; Rimantas Petrikas</p>
    </div>
  );
};

export default Footer;
