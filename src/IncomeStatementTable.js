import React from "react";
import { PureComponent } from "react";

import { IncomeStatementCategory } from "./IncomeStatementCategory";

export default class IncomeStatementTable extends PureComponent {
  render() {
    return (
      <div>
        {this.props.data.map((category) => {
          return (
            <>
              <div>
                {category.name}
                <br />
              </div>
              <IncomeStatementCategory category={category} />
            </>
          );
        })}
      </div>
    );
  }
}
