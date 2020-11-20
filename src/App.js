import React from "react";
import IncomeStatementTable from "./IncomeStatementTable";

import { getIncomeStatement } from "./apiMock";

import "./styles.css";

export default function App() {
  let data;

  getIncomeStatement().then((response) => {
    data = response;
  });

  return (
    <div className="App">
      <h1>Income Statement</h1>

      <IncomeStatementTable data={data} />
    </div>
  );
}
