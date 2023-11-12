import "./App.css";
// import Header from "./components/layout/Header";
import Card from "./components/pages/Card";
import Home from "./components/pages/Home";
import { CartProvider } from "react-use-cart";
// import Chome from "./components/pages/1/Chome";
// import Addcard from "./components/pages/1/Addcard";
// import Material from "./components/pages/1/Material";
// import AcUnitIcon from '@mui/icons-material/AcUnit';

// import { pink } from '@mui/material/colors';
// import M2home from "./components/pages/2/M2home";
// import M2addcard from "./components/pages/2/M2addcard";

function App() {
  return (
    <>
    {/* <AcUnitIcon sx={{ color: pink[500], fontSize: 40  }} /> */}
   <CartProvider>
      <Home />
      <Card />
      </CartProvider>          

   {/* <Chome/>
     <Addcard/> */}

     {/* <Material/> */}
    
{/* <M2home/>
<M2addcard/> */}

<h1>Hello</h1>
    </>
  );
}

export default App;
