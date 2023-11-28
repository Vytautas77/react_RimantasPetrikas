import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";
import Styles from "./about.module.css";

const index = () => {
  return (
    <>
      <Header />
      <div className={Styles.wrapper}>about</div>
      <Footer />
    </>
  );
};

export default index;
