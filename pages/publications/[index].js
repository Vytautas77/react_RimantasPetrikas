import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";
import Styles from "./publlications.module.css";

const index = () => {
  return (
    <>
      <Header />
      <div className={Styles.wrapper}>publications</div>
      <Footer />
    </>
  );
};

export default index;
