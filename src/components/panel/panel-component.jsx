import GalleryCard from "../../routes/category/GalleryCard/GalleryCard.jsx";

import React, { useState, useEffect } from "react";

import "../../global.css";
import styles from "./panel.script.module.css";

const Panel = ({ items }) => {
  return (
    <div className={styles.OuterContainer}>
      <div className={styles.PanelContainer}>
        {items &&
          items.map((item) => (
            <GalleryCard
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.name}
              price={`$${item.price}.00`}
              starsLabel={item.amtstars}
            />
          ))}
      </div>
    </div>
  );
};

export default Panel;
