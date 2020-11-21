import React from "react";
import {IncomeStatementCategory} from "./IncomeStatementCategory";

const IncomeStatementTable = ({data, showPeriod}) => {
    const hasData = data.length > 0;
    if(!hasData) { return <p>No information is available at this time.</p>}

    return (
      <div>
          <table>
        {data.map((category) => {
          return (
              <>
                <tr>
                    <td>{category.name}</td>
                </tr>
                  <tr>
                      <td>
                          <IncomeStatementCategory category={category} />
                      </td>
                  </tr>
              </>
          );
        })}
          </table>
      </div>
  );
}
export default IncomeStatementTable;
