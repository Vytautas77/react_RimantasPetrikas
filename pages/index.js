import Header from "@/components/organisms/header/Header";
import Main from "@/components/organisms/main/Main";
import Footer from "@/components/organisms/footer/Footer";
import Link from "next/link";
import Styles from "./index.module.css";

const index = () => {
  return (
    <div>
      <Header />
      <div className={Styles.wrapper}>
        <Link href="/page">To page</Link>
      </div>
      <Footer />
    </div>
  );
};

export default index;
