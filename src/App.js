import React, {useEffect, useState} from "react";
import IncomeStatementTable from "./IncomeStatementTable";
import MonthSelect from "./MonthSelect";
import {getIncomeStatement} from "./apiMock";

import "./styles.css";

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [periods, setPeriods] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const response = await getIncomeStatement();
            if(response) {
                const { financials, periods} = response;
                setData(financials);
                setPeriods(periods);
                setIsLoading(false);
            } else {
                console.log("There was an error fetching data.")
            }
        }
        fetchData()
    }, []);

    const handleFilter = (selection) => {
        console.log(selection)
    }

    return isLoading
        ? <p>Loading...</p>
        : <div className="App">
            <h1>Income Statement</h1>
            <MonthSelect options={periods} onClick={handleFilter}/>
            <IncomeStatementTable data={data}/>
        </div>;
}

export default App;
