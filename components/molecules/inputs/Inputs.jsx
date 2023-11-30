import { useState } from "react";
import axios from "axios";
import Styles from "./inputs.module.css";
import Button from "@/components/atoms/button/Button";
import { Roboto } from "next/font/google";
import { Smooch_Sans } from "next/font/google";
import { useRouter } from "next/router";

const SmoochSans = Smooch_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Inputs = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPhotoUrl, setInputPhotoUrl] = useState("");
  // const [albums, setAlbums] = useState(null);

  const validateInputs = () => {
    if (!inputTitle || !inputDescription || !inputPhotoUrl) {
      return false;
    }
    return true;
  };

  const router = useRouter();
  const newAlbum = {
    title: inputTitle,
    description: inputDescription,
    imgUrl: inputPhotoUrl,
  };

  const insertAlbum = async () => {
    const isValid = validateInputs();

    if (isValid) {
      const response = await axios.post(
        "https://65665dc964fcff8d730ebaa9.mockapi.io/PhotoAlbums",
        newAlbum
      );

      if (response.status === 201) {
        router.push("/photoGallery/index");
        setInputTitle("");
        setInputDescription("");
        setInputPhotoUrl("");
      }
    } else {
      console.log("Please fill the inputs");
    }
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.inputsBox}>
        <h2 className={SmoochSans.className}>Įkelti galeriją</h2>
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          placeholder="Album title"
        />
        <input
          type="text"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={inputPhotoUrl}
          onChange={(e) => setInputPhotoUrl(e.target.value)}
          placeholder="Album photo url"
        />
        <div>
          <Button text="Add new album" onClick={insertAlbum} />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
