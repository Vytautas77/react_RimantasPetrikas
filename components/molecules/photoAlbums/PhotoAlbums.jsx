import Styles from "./photoAlbums.module.css";
import PhotoAlbum from "@/components/molecules/photoAlbum/photoAlbum";
import Button from "@/components/atoms/button/Button";
// import Link from "next/link";
import { useRouter } from "next/router";

const PhotoAlbums = ({ albums, setAlbums }) => {
  const removeAlbum = (id) => {
    const filteredAlbums = albums.filter((album) => {
      return album.id !== id;
    });
    setAlbums(filteredAlbums);
  };

  const router = useRouter();

  const onAddButtonClick = () => {
    router.push("/input/index");
  };

  return (
    <>
      <div className={Styles.wrapper}>
        {albums.map((album) => (
          <div key={album.id}>
            <PhotoAlbum
              id={album.id}
              title={album.title}
              description={album.description}
              imgUrl={album.imgUrl}
              removeAlbum={removeAlbum}
            />
          </div>
        ))}
      </div>
      <div className={Styles.buttonAdd}>
        <Button text="Add new album" onClick={onAddButtonClick} />
      </div>
    </>
  );
};

export default PhotoAlbums;
