import React from "react";
import IncomeStatementSubCategory from "./IncomeStatementSubCategory";
import Section from "./Section";
import FilterContext from "./FilterContext";

import "./IncomeStatementTable.css";

const IncomeStatementTable = ({data, headers}) => {
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
                return <>
                    <Section>
                        <div className="TableHead">
                            <div className="TableHead-spacer" />
                            {headers.map(h => {
                                if(filters.currentPeriod === h || filters.currentPeriod === "") {
                                    return <div className="TableHead-cell">{h}</div>
                                }
                            })}
                        </div>
                    </Section>
                    {renderCategories(filters)}
                </>
            }}
        </FilterContext>
        : <p>No income data available.</p>;
}
export default IncomeStatementTable;
