import React from "react";
import Panel from "../../components/panel/panel-component.jsx";
import styles from  "./category-component.module.css"
import ArtPieceItem from "../../components/art-piece/art-piece-item.jsx";
import DropdownPanel from "./DropdownPanel/DropdownPanel.jsx" ;


export default function ImageGallery({ setShowPanel, showPanel, arrayWithStars, artPiecesOfCategoryArray, updateStars }) {
    return (

<div className = {styles.ComponentGui}>
     <div className = {styles.PageContainer}>
    <h1 className = {styles.Banner}>Image Gallery </h1>
     <h2 className = {styles.ArtworkTitle} >Would you like to rate these works?</h2>
      <div></div>
      
      
      <div className = {styles.ButtonContainer} >
        <button className = {styles.ButtonShow}
          onClick={() => {
            setShowPanel((showPanel) => !showPanel);
          }}
          
          >
         {showPanel ? "Hide Panel" : "Show Panel"}
        </button>
      </div>
      <div className = {styles.ArtworkLink}>
      <a href="/">Home</a>
      </div>

      
      <div className = {styles.UpperGrid}>
        <DropdownPanel showPanel = {showPanel} arrayWithStars = {arrayWithStars}/>
      </div>


       <div className = {styles.GridContainer}> 
      <div className = {styles.Grid} >
      {artPiecesOfCategoryArray.map((item, index) => (
          //<ArtPieceItem onWidthChanged = {handleMessage} key = {index} item = {item} updateStars = {updateStars}/>
          <ArtPieceItem  key = {index} item = {item} updateStars = {updateStars}/>
          ))
      }
      </div>
      </div>
       

      
    </div>
 
 </div>
    )
}