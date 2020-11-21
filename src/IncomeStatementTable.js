import React from "react";
import {IncomeStatementCategory} from "./IncomeStatementCategory";

const IncomeStatementTable = ({data}) => {
    const hasData = data.length > 0;
    if(!hasData) { return <p>No information is available at this time.</p>}

    return (
      <div>
        {data.map((category) => {
          return (
              <>
                <div>
                  {category.name}
                  <br/>
                </div>
                <IncomeStatementCategory category={category}/>
              </>
          );
        })}
      </div>
  );
}
export default IncomeStatementTable;
