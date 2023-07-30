import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";

const CartContext = createContext({
  items: {},
  totalItems: 0,
  addItem: (product) => {},
  removeItem: (product) => {},
  isCartOpen: false
});

export default function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  const [totalCartPrice, setCartPrice] = useState(0);

  const addItem = useCallback(
    (product) => {
      const newItems = { ...items };
      if (newItems[product.id]) {
        newItems[product.id] = {
          ...newItems[product.id],
          quantity: newItems[product.id].quantity + 1
        };
      } else {
        newItems[product.id] = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1
        };
      }
      setItems(newItems);
      setCartPrice(totalCartPrice + product.price);
    },
    [items, totalCartPrice]
  );

  const removeItem = useCallback(
    (product) => {
      const newItems = { ...items };
      if (newItems[product.id]) {
        if (newItems[product.id].quantity > 1) {
          newItems[product.id] = {
            ...newItems[product.id],
            quantity: newItems[product.id].quantity - 1
          };
        } else {
          delete newItems[product.id];
        }
      } else {
        return;
      }
      setItems(newItems);
      setCartPrice(totalCartPrice - product.price);
    },
    [items, totalCartPrice]
  );

  // useEffect(() => {
  //   let totalPrice = 0;
  //   if (Object.keys(items).length) {
  //     Object.keys(items).map((key) => {
  //       return (totalPrice += items[key].quantity * items[key].price);
  //     });
  //   }
  //   setCartPrice(totalPrice);
  // }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        addItem,
        removeItem,
        isCartOpen,
        setIsCartOpen,
        totalCartPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
