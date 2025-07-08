import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import banner from "./assets/banner.png";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import Checkout from "./components/Checkout/Checkout";

function AppContent() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      {location.pathname === "/" && (
        <section className="banner">
          <img src={banner} alt="banner image" />
        </section>
      )}

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Todos los productos" />}
        />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
