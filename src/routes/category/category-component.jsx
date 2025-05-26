//5/2/25 - Prettified, DONE//
import { React, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ART } from "../../assets/ART_DATA";
import ArtPieceItem from "../../components/art-piece/art-piece-item.jsx";
import Panel from "../../components/panel/panel-component.jsx";
import "../../global.css";
import styles from "../../routes/category/category-component.module.css";

export default function Category() {
  let [showPanel, setShowPanel] = useState(false);
  
  // 'route' holds URL parameters from React Router.
  // For example, in the URL /category/hats, route.category === "hats"
  const route = useParams();
  
  // Each reroute causes the component to remount
  let imageCategoryToShow = route.category;

  const [products, setProducts] = useState(() => {
    const storedValue = localStorage.getItem("products");
    // Initialize products from localStorage if it exists;
    // otherwise, use the default ART array. LocalStorage can hold rating data like amtstars.
    return storedValue !== null ? JSON.parse(storedValue) : ART;
  });

  // MEMOIZED: Recalculates only when products or imageCategoryToShow changes
  let artPiecesOfCategoryArray = useMemo(() => {
    return products.filter(
      // Return a new array with only the items matching the selected category
      (element) => element.category === imageCategoryToShow
    );
  }, [products, imageCategoryToShow]);

  // Used to pass only starred items to the Panel component
  let arrayWithStars = products.filter(
    (element) => element.amountStarsNumber !== 0
  );

  const updateStars = (id, amtStars) => {
    // Create a new array with updated rating for a single item
    const updatedArrayOfProducts = products.map((artPiece) => {
      if (artPiece.id !== id) return artPiece; // Keep items unchanged unless ID matches

      // Toggle: If same star value is selected again, reset to 0
      const isSame = artPiece.amountStarsNumber === amtStars;
      const newAmountStarsNumber = isSame ? 0 : amtStars;

      // Maps numeric ratings to string labels
      const starsLabelMap = {
        0: "none",
        1: "One Check",
        2: "Two Checks",
        3: "Three Checks",
        4: "Four Checks",
      };

      // Return a new object with updated rating fields
      return {
        ...artPiece,
        amountStarsNumber: newAmountStarsNumber,
        amtstars: starsLabelMap[newAmountStarsNumber], // Human-readable label
      };
    });

    // Update component state for immediate UI reflection (faster than localStorage)
    setProducts(updatedArrayOfProducts);

    // Persist updated ratings across reloads or navigation
    localStorage.setItem("products", JSON.stringify(updatedArrayOfProducts));
  };

  return (
    <div className={styles.ComponentGui}>
      <div className={styles.PageContainer}>
        <h1 className={styles.Banner}>Image Gallery </h1>
        <h2 className={styles.ArtworkTitle}>
          Would you like to rate these works?
        </h2>
        <div></div>

        <div className={styles.ButtonContainer}>
          <button
            className={styles.ButtonShow}
            onClick={() => {
              setShowPanel((showPanel) => !showPanel);
            }}
          >
            {showPanel ? "Hide Panel" : "Show Panel"}
          </button>
        </div>

        <div className={styles.ArtworkLink}>
          <a href="/">Home</a>
        </div>

        <div className={styles.UpperGrid}>
          {/* Updates on every reroute; shows only artworks with star ratings */}
          {showPanel && <Panel items={arrayWithStars} />}
        </div>

        <div className={styles.GridContainer}>
          <div className={styles.Grid}>
            {/* Displays all artworks in the current category */}
            {artPiecesOfCategoryArray.map((item, index) => (
              <ArtPieceItem key={index} item={item} updateStars={updateStars} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}