import React from "react";
import FilterContext from "./FilterContext"

const IncomeStatementSubCategory = ({subcategory}) => {
    const { name, values } = subcategory;
    const isTotal = typeof values === "string";

    const renderDetails = (filters, values) => {
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
                    if(name.includes(filters.keyword) || filters.keyword === "") {
                        return (
                            <div className="subcat-row">
                                <div>{name}</div>
                                { isTotal ? <div>{values}</div> : renderDetails(filters, values)}
                            </div>
                        )
                    }
                }
            }
        </FilterContext.Consumer>
    )
}
export default IncomeStatementSubCategory;
