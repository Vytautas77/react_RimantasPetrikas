import Styles from "./photoAlbum.module.css";
import { Smooch_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import { ButtonDel } from "@/components/atoms/button/Button";

const SmoochSans = Smooch_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const photoAlbum = ({ title, description, imgUrl, removeAlbum, id }) => {
  const onDeleteButtonClick = () => {
    removeAlbum(id);
  };
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={`${Styles.title} ${SmoochSans.className}`}>{title}</div>
        <img src={imgUrl} alt="Album Photo" />
        <div className={roboto.className}>{description}</div>
        <div className={Styles.button}>
          <ButtonDel type="Delete" onClick={onDeleteButtonClick} />
        </div>
      </div>
    </>
  );
};

export default photoAlbum;
