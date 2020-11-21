import React from "react";
import FilterContext from "./FilterContext"

const IncomeStatementSubCategory = ({subcategory, type}) => {
    const { name, values } = subcategory;

    const renderRows = (filters, values) => {
        return values.map( v => {
            const { month, value } = v;
            if(filters.currentPeriod === month || filters.currentPeriod === "") {
                return <div className={type ? "Subcategory-value Summary" : "Subcategory-value"}>{value}</div>
            }
        })
    }

    return (
        <FilterContext.Consumer>
            {
                filters => {
                    return (
                        <div className="Subcategory">
                            <div className="Subcategory-name">{name}</div>
                            { renderRows(filters, values) }
                        </div>
                    )
                }
            }
        </FilterContext.Consumer>
    )
}
export default IncomeStatementSubCategory;
