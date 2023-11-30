import Styles from "./photoAlbum.module.css";
import { Smooch_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import Button from "@/components/atoms/button/Button";
import Link from "next/link";

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
        <Link href="/gallery/index.js">
          <img src={imgUrl} className={Styles.img} alt="Album Photo" />
        </Link>
        <div className={roboto.className}>{description}</div>
        <div className={Styles.button}>
          <Button text="DELETE" type="Delete" onClick={onDeleteButtonClick} />
        </div>
      </div>
    </>
  );
};

export default photoAlbum;
