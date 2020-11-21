import React from "react";
import FilterContext from "./FilterContext"

const IncomeStatementSubCategory = ({subcategory, type}) => {
    const { name, values } = subcategory;

    const formatMoney = (n) => {
        const float = n.toLocaleString();
        return `$${String(float).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }

    const renderRows = (filters, values) => {
        return values.map( (v,i) => {
            const { month, value } = v;
            if(filters.currentPeriod === month || filters.currentPeriod === "") {
                return <div
                    key={`value_${i}`}
                    className={type ? "Subcategory-value Summary" : "Subcategory-value"}>
                    {formatMoney(value)}
                </div>
            } else {
                return null;
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
