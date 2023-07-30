import React, { useCallback } from "react";
import { useCategoryContext } from "../context/CategoryContext";

export default function Category({ category }) {
  const { setSelectedCategory } = useCategoryContext();
  const handleClick = useCallback(() => {
    setSelectedCategory(category);
  }, [setSelectedCategory, category]);
  return (
    <div className="header-item" onClick={handleClick}>
      {category}
    </div>
  );
}
