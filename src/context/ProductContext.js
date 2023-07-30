import { createContext, useContext } from "react";
import useApi from "../hooks/useApi";
import { useCategoryContext } from "./CategoryContext";

export const ProductsContext = createContext();

export default function ProductProvider({ children }) {
  const { selectedCategory } = useCategoryContext();
  const URL =
  selectedCategory !== "All Category"
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : `https://fakestoreapi.com/products`;
  const { isLoadingData, data, loadError } = useApi(URL);

  return (
    <ProductsContext.Provider
      value={{
        isLoadingData,
        data,
        loadError,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductsContext);
