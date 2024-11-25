import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/homepage.jsx";
import About from "./pages/about/about.jsx";
import Products from "./pages/products/products.jsx";
import axios from "axios";
import OneProduct from "./pages/oneProduct/oneproduct.jsx";
import { Toaster } from "react-hot-toast";
axios.get('https://dummyjson.com/products')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/oneproduct/:id" element={<OneProduct />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
