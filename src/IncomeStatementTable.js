import React from "react";
import IncomeStatementSubCategory from "./IncomeStatementSubCategory";
import Section from "./Section";
import FilterContext from "./FilterContext";
import {calcSubcategoryTotals, hasMatch} from "./utils";

import "./IncomeStatementTable.css";

const IncomeStatementTable = ({data, headers}) => {
    const hasData = data.length > 0;

    const hasSubcategoryMatch = (category, keyword) => {
        const {subCategories} = category;
        return subCategories
            .map( sc => sc.name)
            .filter( name => hasMatch(name, keyword))
            .length > 0;
    }

    const filterTableRows = (keyword) => {
        let flag = false;

        const categories = data.filter(d => {
            if(hasSubcategoryMatch(d, keyword)) { flag = true }
            return hasMatch(d.name, keyword) || hasSubcategoryMatch(d, keyword)
        });

        if(flag) {
            return categories.map( cat => {
                return {...cat, subCategories: cat.subCategories.filter( sc => hasMatch(sc.name, keyword))};
            });
        } else {
            return categories;
        }
    }

    const renderCategories = ({keyword}) => {

        const results = keyword ? filterTableRows(keyword) : data;

        return results.length ?
            results.map(category => {
                const {subCategories, quarterly_total} = category;
                const totals = {
                    name: "Total",
                    values: calcSubcategoryTotals(subCategories)
                };

                return (
                    <Section key={category.name} label={category.name} total={quarterly_total}>
                        {subCategories && subCategories.map(sc => <IncomeStatementSubCategory key={sc.name}
                                                                                              subcategory={sc}/>)}
                        <div className="Subcategory-totals">
                            <IncomeStatementSubCategory subcategory={totals} type="summary"/>
                        </div>
                    </Section>
                );
            })
            : <p>There are no results</p>

    }

    const renderHeaders = (filters) => {
        return headers.map(h => {
            if (!filters.currentPeriod || hasMatch(filters.currentPeriod, h)) {
                return <div key={h} className="TableHead-cell responsive">{h}</div>
            } else {
                return null;
            }
        });
    }

    return hasData ?
        <FilterContext.Consumer>
            {filters => {
                return <>
                    <div className="TableHead">
                        <div className="TableHead-spacer"/>
                        {renderHeaders(filters)}
                    </div>
                    {renderCategories(filters)}
                </>
            }}
        </FilterContext.Consumer>
        : <p>No income data available.</p>;
}
export default IncomeStatementTable;
