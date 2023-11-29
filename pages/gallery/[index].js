import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";
import Gallerys from "@/components/molecules/gallerys/Gallerys";

const index = () => {
  const [photos, setPhotos] = useState(null);

  const fetchPhotoData = async () => {
    try {
      const response = await axios.get("https://postimg.cc/gallery/yCCnWNC4");
      console.log(response);
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  };
  useEffect(() => {
    fetchPhotoData();
  }, []);

  return (
    <>
      <Header />
      <Gallerys />
      <Footer />
    </>
  );
};

export default index;
