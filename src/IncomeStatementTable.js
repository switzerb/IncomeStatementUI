import React from "react";
import IncomeStatementSubCategory from "./IncomeStatementSubCategory";
import Section from "./Section";

const IncomeStatementTable = ({data}) => {
    const hasData = data.length > 0;
    console.log(hasData)

    const renderCategories = () => {
        return data.map((category) => {
            const {subCategories} = category;

            return (
                <Section label={category.name}>
                    <div className="IncomeContainer">
                        {subCategories && subCategories.map( sc => <IncomeStatementSubCategory subcategory={sc}/>)}
                    </div>
                </Section>
            );
        })
    }

    return hasData ? <div>{renderCategories()}</div> : <p>No income data available.</p>;
}
export default IncomeStatementTable;
