import React from "react";
import IncomeStatementSubCategory from "./IncomeStatementSubCategory";
import Section from "./Section";
import FilterContext from "./FilterContext";
import { calcSubcategoryTotals } from "./utils";

import "./IncomeStatementTable.css";


const IncomeStatementTable = ({data, headers}) => {
    const hasData = data.length > 0;

    const renderCategories = ({keyword}) => {
        return data.map((category) => {
            const {subCategories, quarterly_total} = category;
            const totals = {
                    name: "Total",
                    values: calcSubcategoryTotals(subCategories)
                };

            const filtered = subCategories.filter( sc => sc.name.includes(keyword));

            // if all subcategories are filtered out, don't show parent category
            const shouldShow = filtered.length;

            if(shouldShow) {
                return (
                    <Section key={category.name} label={category.name} total={quarterly_total}>
                        {filtered && filtered.map( sc => <IncomeStatementSubCategory key={sc.name} subcategory={sc}/>)}
                        <div className="Subcategory-totals">
                            <IncomeStatementSubCategory subcategory={totals} type="summary"/>
                        </div>
                    </Section>
                );
            } else {
                return null;
            }
        })
    }

    const renderHeaders = (filters) => {
        return headers.map(h => {
            if(filters.currentPeriod === h || filters.currentPeriod === "") {
                return <div key={h} className="TableHead-cell">{h}</div>
            } else {
                return null;
            }
        });
    }

    return hasData ?
        <FilterContext.Consumer>
            { filters => {
                return <>
                        <div className="TableHead">
                            <div className="TableHead-spacer" />
                            { renderHeaders(filters) }
                        </div>
                    {renderCategories(filters)}
                </>
            }}
        </FilterContext.Consumer>
        : <p>No income data available.</p>;
}
export default IncomeStatementTable;
