import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";
import Styles from "./photoGallery.module.css";

const index = () => {
  return (
    <>
      <Header />
      <div className={Styles.wrapper}>photGallery</div>
      <Footer />
    </>
  );
};

export default index;
