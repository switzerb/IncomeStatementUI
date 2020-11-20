import React from "react";

import "./IncomeStatementStyles.css";

export const IncomeStatementCategory = ({ category }) => {
  // TODO implement this
  return (
    <div className="IncomeContainer">
      {category.subCategories.map((subCategory) => (
        <div>{subCategory.name}</div>
      ))}
    </div>
  );
};
