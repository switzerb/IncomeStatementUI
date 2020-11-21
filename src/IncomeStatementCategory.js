import React from "react";

import "./IncomeStatementStyles.css";
import IncomeStatementSubCategory from "./IncomeStatementSubCategory";

export const IncomeStatementCategory = ({ category }) => {
  const {subCategories} = category;
  return (
    <div className="IncomeContainer">
      {subCategories && subCategories.map( sc => <IncomeStatementSubCategory subcategory={sc}/>)}
    </div>
  );
};
