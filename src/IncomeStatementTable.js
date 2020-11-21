import React from "react";
import IncomeStatementSubCategory from "./IncomeStatementSubCategory";
import Section from "./Section";
import FilterContext from "./FilterContext";

const IncomeStatementTable = ({data}) => {
    const hasData = data.length > 0;

    const renderCategories = ({keyword}) => {
        return data.map((category) => {
            const {subCategories, quarterly_total} = category;

            // if all subcategories are filtered out, don't show parent category
            const shouldShow = subCategories.filter( sc => sc.name.includes(keyword)).length;

            if(shouldShow) {
                return (
                    <Section label={category.name} total={quarterly_total}>
                        <div className="IncomeContainer">
                            {subCategories && subCategories.map( sc => <IncomeStatementSubCategory subcategory={sc}/>)}
                        </div>
                    </Section>
                );
            }
        })
    }

    return hasData ?
        <FilterContext>
            { filters => {
                return renderCategories(filters)
            }}
        </FilterContext>
        : <p>No income data available.</p>;
}
export default IncomeStatementTable;
