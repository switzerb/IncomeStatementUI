import React from "react";
import FilterContext from "./FilterContext";
import { formatMoney } from "./utils";

const IncomeStatementSubCategory = ({subcategory, type}) => {
    const { name, values } = subcategory;

    const renderRows = (filters, values) => {
        return values.map( (v,i) => {
            const { month, value } = v;
            if(filters.currentPeriod === month || filters.currentPeriod === "") {
                return <div
                    key={`value_${i}`}
                    className={type ? "Subcategory-value Summary Responsive" : "Subcategory-value Responsive"}>
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
                            <div className="Subcategory-name Responsive">{name}</div>
                            { renderRows(filters, values) }
                        </div>
                    )
                }
            }
        </FilterContext.Consumer>
    )
}
export default IncomeStatementSubCategory;
