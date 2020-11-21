import React, {useEffect, useState} from "react";
import IncomeStatementTable from "./IncomeStatementTable";

import {getIncomeStatement} from "./apiMock";

import "./styles.css";

const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const response = await getIncomeStatement();
            setData(response);
            setIsLoading(false);
        }
        fetchData()
    }, []);

    return isLoading
        ? <p>Loading...</p>
        : <div className="App">
            <h1>Income Statement</h1>
            <IncomeStatementTable data={data}/>
        </div>;
}

export default App;
