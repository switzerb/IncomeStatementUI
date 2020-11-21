import React from "react";
import {IncomeStatementCategory} from "./IncomeStatementCategory";
import FilterContext from "./FilterContext";

const IncomeStatementTable = ({data, showPeriod}) => {
    const hasData = data.length > 0;
    if(!hasData) { return <p>No information is available at this time.</p>}

    return (
      <FilterContext.Consumer>
          { filters => {
              return (<div>
                  {data.map((category) => {
                      if(category.name && category.name.includes(filters.keyword) || filters.keyword === ""){
                          return (
                              <>
                                  <div>
                                      <div>{category.name}</div>
                                  </div>
                                  <div>
                                      <div>
                                          <IncomeStatementCategory category={category} />
                                      </div>
                                  </div>
                              </>
                          );
                      }
                  })}
              </div>)
          }}
      </FilterContext.Consumer>
  );
}
export default IncomeStatementTable;
