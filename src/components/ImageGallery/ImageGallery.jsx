import clsx from "clsx";
import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos }) {
  return (
    <ul className={clsx(s.itemsGallery)}>
      {photos.map((photo) => (
        <li key={photo.id} className={clsx(s.item)}>
          <ImageCard photo={photo} />
        </li>
      ))}
    </ul>
  );
}
