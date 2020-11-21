import React from "react";
import IncomeStatementSubCategory from "./IncomeStatementSubCategory";
import Section from "./Section";
import FilterContext from "./FilterContext";

import "./IncomeStatementTable.css";
import IncomeStatementSubCategoryTotals from "./IncomeStatementSubCategoryTotals";

const IncomeStatementTable = ({data, headers}) => {
    const hasData = data.length > 0;

    const renderCategories = ({keyword}) => {
        return data.map((category) => {
            const {subCategories, quarterly_total} = category;
            const totals = {
                    name: "Total",
                    values: calcSubcategoryTotals(subCategories)
                };

            // if all subcategories are filtered out, don't show parent category
            const shouldShow = subCategories.filter( sc => sc.name.includes(keyword)).length;

            if(shouldShow) {
                return (
                    <Section label={category.name} total={quarterly_total}>
                        {subCategories && subCategories.map( sc => <IncomeStatementSubCategory subcategory={sc}/>)}
                        <div className="Subcategory-totals">
                            <IncomeStatementSubCategory subcategory={totals} type="summary"/>
                        </div>
                    </Section>
                );
            }
        })
    }

    const calcSubcategoryTotals = (subcategories) => {
        let result = [];
        const aggregated = subcategories.reduce((a,sc)=> {
            sc.values.map(v => {
                if(!a[v.month]) {
                    a[v.month]  = [Number(v.value)];
                } else {
                    a[v.month].push(Number(v.value));
                }
            });
            return a;
        },{});
        Object.entries(aggregated).map(([k,v]) => {
            result.push({ month: k, value: v.reduce((a,n) => a + n, 0)});
        });
        return result;
    }

    return hasData ?
        <FilterContext>
            { filters => {
                return <>
                        <div className="TableHead">
                            <div className="TableHead-spacer" />
                            {headers.map(h => {
                                if(filters.currentPeriod === h || filters.currentPeriod === "") {
                                    return <div className="TableHead-cell">{h}</div>
                                }
                            })}
                        </div>
                    {renderCategories(filters)}
                </>
            }}
        </FilterContext>
        : <p>No income data available.</p>;
}
export default IncomeStatementTable;
