
//
// worked on max width for site: 4000k, works besides checkboxes, and centering.  Broke other things while doing this, shouldn't take very long to fix.  look at width and height functionality and decide if it is still needed.
//
import React, { useState, useEffect, useMemo, useRef} from "react";
import { CategoryContainer, ButtonShow, ButtonContainer } from "./category-styles";
import { useParams } from "react-router-dom";
import { NavLink } from "../navigation/navigation-styles";
import { ART } from "../../assets/ART_DATA";
import ArtPieceItem from "../../components/art-piece/art-piece-item.jsx";
import Panel from "../../components/panel/panel-component.jsx";
import "./category-styles.css";
import DropdownPanel from "./DropdownPanel";


export default function Category() {
  
  
 
  let flag1 = true
  //!!!!
  let artPiyArray = [];
  let [showPanel, setShowPanel] = useState(false);
  const route = useParams();
  let imageCategoryToShow = route.category;
  //sets products to art, amountstars2 is zero, and string is none
  let [products, setProducts] = useState(ART);
  //MEMOIZE  - only if products or imagecate...
  
  let artPiecesOfCategoryArray = useMemo( () => {
    return products.filter((element) => element.category === imageCategoryToShow
    );
  
  } , [products, imageCategoryToShow])
 
  let arrayWithStars  = products.filter(
    (element) => element.amountStarsNumber !=  0
  );

  const [theWidth, setWidth] = useState(0)
 
  const handleMessage = (newWidth) => {
    setWidth(newWidth)
    //console.log("logged",newWidth)
  }

  useEffect(() => {
    // get any products in locals torage for both products and panel - just on first render
    const productsArrayStored = JSON.parse(localStorage.getItem("products"));
   
    if (productsArrayStored) {
      setProducts(productsArrayStored);
    }
    
  }, []);


  /////

  const updateStars = (id, amtStars) => {

    let updatedarrayOfProducts = products.map((artPieces) => {
      if (artPieces.id === id) {
        if (artPieces.amountStarsNumber === amtStars) {
          artPieces.amountStarsNumber = 0;
          artPieces.amtstars = "none"
        } else {
          artPieces.amountStarsNumber = amtStars;
         if(amtStars === 1){
          
            artPieces.amtstars = "One Check"
          }
          if(amtStars === 2){
            artPieces.amtstars = "Two Checks"
          }
          if(amtStars === 3){
            artPieces.amtstars = "Three Checks"
          }
          if(amtStars === 4){
            artPieces.amtstars = "Four Checks"
          }
        }
      
      }
      return(artPieces)
    });
    setProducts(updatedarrayOfProducts);
   
      localStorage.setItem(`products`, JSON.stringify(updatedarrayOfProducts));
  };
  
  return (
     <>
     
    <div className="page-container">
    <div className =  "banner"> - Image Gallery -</div>
     <div className = "artwork-title">Would you like to rate these works?</div>
      <div></div>
      <ButtonContainer >
        <ButtonShow
          onClick={() => {
            setShowPanel((showPanel) => !showPanel);
          }}
          
          >



            
            {showPanel ? "Hide Panel" : "Show Panel"}
        </ButtonShow>
      </ButtonContainer>


          
      <div className="artwork-link">
      <a href="/">Home</a>
      </div>

      
      <DropdownPanel showPanel={showPanel} arrayWithStars={arrayWithStars}/>

      <div className = {styles.GridContainer}>
      <div className = {styles.grid} >
     
      {artPiecesOfCategoryArray.map((item, index) => (
          
          <ArtPieceItem onWidthChanged = {handleMessage} key = {index} item = {item} updateStars = {updateStars}/>
          ))}
          
       
       </div>
       

      
    </div>
    </div>
 
 </>

)
}
 