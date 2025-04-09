import React from "react";
//import styles from "./GalleryCard.module.css";
import styles from "./GalleryCard.module.css"

export default function GalleryCard({ key, imageUrl, title, price, stars }) {
  return (
    <div className={styles.Text}>
       <div key={key}>
      <p className={styles.title}>{title}</p>

      <div className = {styles.ImageContainer}>
      <img src={imageUrl} alt="gallery" className={styles.PanelImage} />
      </div>
      
      <p>{price}</p>
      <section>{stars}</section>
      <div>----</div>
    </div>
    </div>
    
  );
}
