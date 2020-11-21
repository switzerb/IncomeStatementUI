import React from "react";
import FilterContext from "./FilterContext"

const IncomeStatementSubCategory = ({subcategory}) => {
    const { name, values } = subcategory;

    const renderRows = (filters, values) => {
        return values.map( v => {
            const { month, value } = v;
            if(filters.currentPeriod === month || filters.currentPeriod === "") {
                return <div>{month}{value}</div>
            }
        })
    }

    return (
        <FilterContext.Consumer>
            {
                filters => {
                    return (
                        <div className="subcat-row">
                            <div>{name}</div>
                            {renderRows(filters, values)}
                        </div>
                    )
                }
            }
        </FilterContext.Consumer>
    )
}
export default IncomeStatementSubCategory;
