import React from "react";
import FilterContext from "./FilterContext"

const IncomeStatementSubCategory = ({subcategory}) => {
    const { name, values } = subcategory;
    const isTotal = typeof values;
    console.log(isTotal === "string")

    const renderDetails = (values) => {
        return values.map( v => {
            const { month, value } = v;
            return <div>{month}{value}</div>
        })
    }

    return (
        <FilterContext.Consumer>
            {
                filters => {
                    console.log(filters)
                    return <div className="subcat-row">
                        <div>{name}</div>
                        <div>{filters.currentPeriod}</div>
                        { isTotal === "string" ? <div>{values}</div> : renderDetails(values)}
                    </div>
                }
            }
        </FilterContext.Consumer>
    )
}
export default IncomeStatementSubCategory;
