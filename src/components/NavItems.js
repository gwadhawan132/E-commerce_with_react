import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import Category from "./Category";

export default function NavItems() {
  const [categories, setCategories] = useState([]);
  const { data, isLoadingData } = useApi(
    `https://fakestoreapi.com/products/categories/`
  );

  useEffect(() => {
    if (!isLoadingData) {
      data.unshift("All Category");
      setCategories([...data]);
    }
  }, [data, isLoadingData]);

  if (!isLoadingData) {
    return (
      <div className="header-items">
        {categories.map((category, i) => {
          return <Category category={category} key={`${category}_` + i} />;
        })}
      </div>
    );
  } else {
    return <div className="header-items">Loading nav items ...</div>;
  }
}
