import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Footer from "./Pages/Footer/Footer";
import PriceChecker from "./Pages/Add_Dream/Add_D";
import Login from "./Pages/Login/Login";


function App() {

  


  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main/>} />  
          <Route path="/PriceChecker" element={<PriceChecker/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>       

      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
