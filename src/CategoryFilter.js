import React from "react";

import "./CategoryFilter.css";

const CategoryFilter = ({onChange}) => {
    return (<div className="CategoryFilter">
        <label>Filter by Category or Subcategory</label>
        <input
            id="filter"
            onChange={onChange}
        />
        </div>)
}

export default CategoryFilter;
