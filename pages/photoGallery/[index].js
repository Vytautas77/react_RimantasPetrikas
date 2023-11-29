import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "@/components/atoms/spinner/Spinner";
import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";
import PhotoAlbums from "@/components/molecules/photoAlbums/PhotoAlbums";

const index = () => {
  const [albums, setAlbums] = useState(null);
  const fetchAlbumData = async () => {
    try {
      const response = await axios.get(
        "https://65665dc964fcff8d730ebaa9.mockapi.io/PhotoAlbums"
      );
      setAlbums(response.data);
    } catch (error) {
      "Error fetching album data:", error;
    }
  };
  useEffect(() => {
    fetchAlbumData();
  }, []);
  return (
    <>
      <Header />
      {albums ? (
        <PhotoAlbums albums={albums} setAlbums={setAlbums} />
      ) : (
        <Spinner />
      )}
      <Footer />
    </>
  );
};

export default index;
