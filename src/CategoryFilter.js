import React from "react";

const CategoryFilter = ({keyword, onChange}) => {
    return (<>
        <label>Filter by Category or Subcategory</label>
        <input
            id="filter"
            onChange={onChange}
        />
        </>)
}

export default CategoryFilter;
