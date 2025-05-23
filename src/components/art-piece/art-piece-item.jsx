import { useEffect, useLayoutEffect, useRef } from "react";
import "../../global.css";
import styles from "../art-piece/art-piece.module.css";

const ArtPieceItem = ({ item, updateStars }) => {
  const divRef = useRef(null);
  

  const sendWidth = (msg) => {
    
  };

  

  return (
    <div className={styles.ComponentArtpiece}>
      <div ref={divRef} key={item.imageUrl}>
        <div className={styles.ContainerForCard}>
          <div className={styles.ImageHeading}> {item.name}</div>

          <div className={styles.ImageHolder}>
            <img
              className={styles.Image}
              type="Image"
              src={item.imageUrl}
              alt="Artwork"
            />
          </div>

          <div className={styles.InputContainer}>
            <input
              checked={item.amountStarsNumber >= 1}
              type={`checkbox`}
              onChange={() => updateStars(item.id, 1)}
            />
            <input
              checked={item.amountStarsNumber >= 2}
              type={`checkbox`}
              onChange={() => updateStars(item.id, 2)}
            />
            <input
              checked={item.amountStarsNumber >= 3}
              type={`checkbox`}
              onChange={() => updateStars(item.id, 3)}
            />
            <input
              checked={item.amountStarsNumber >= 4}
              type={`checkbox`}
              onChange={() => updateStars(item.id, 4)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtPieceItem;
