import { Outlet } from "react-router-dom";
import "../../global.css";


const Navigation = () => {
  return (
     //Outlet is where child routes in router code (App.js) of <navigation/> go
   
      <Outlet />
    
  );
};
export default Navigation;
