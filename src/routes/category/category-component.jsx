 import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories-context';
import { CategoryContainer } from './category-styles';
import PhotoImages from '../../components/photoimages/photoimages-component'

const Category = () => {


   
  let { category } = useParams();
  category = "hats";
        const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
   
  console.log("category :", category);



  /*
  categoriesMap[category] = 
    
  [
    {
        title: 'hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 25,
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18,
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                price: 35,
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                price: 25,
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                price: 18,
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14,
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                price: 18,
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                price: 14,
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                price: 16,
            },
        ],
    },
  ];
  */
    return (

        
    
    
 
        <div>
        <h4>Category</h4>    
        
        <Fragment>
      
      <h1>title</h1>
      <CategoryContainer>
        {products &&
          products.map((product) => (
             
            <PhotoImages key={product.id} category={product} />
           
             
          ))}
                    
        
      </CategoryContainer>
    </Fragment>
        
            
           
            
        
        </div>
        
            
            

    );
};

export default Category;