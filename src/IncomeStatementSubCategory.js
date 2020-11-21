import React from "react";

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
        <div className="subcat-row">
            <div>{name}</div>
            { isTotal === "string" ? <div>{values}</div> : renderDetails(values)}
        </div>
    )
}
export default IncomeStatementSubCategory;
