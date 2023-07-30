import "./App.css";
import Products from "./components/Products";
import CartProvider from "./context/CartContext";
import CategoryProvider from "./context/CategoryContext";
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <CartProvider>
      <CategoryProvider>
        <div className="App">
          <ProductProvider>
            <Products />
          </ProductProvider>
        </div>
      </CategoryProvider>
    </CartProvider>
  );
}

export default App;
