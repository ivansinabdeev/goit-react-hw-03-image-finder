import { Component } from "react";

import s from "./ImageGallery.module.css";

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={s.ImageGalleryItem}>
        <img src="" alt="" className={s.ImageGalleryItemImage} />
      </li>
    );
  }
}
export default ImageGalleryItem;
