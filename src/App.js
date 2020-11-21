import React, {useEffect, useState} from "react";
import IncomeStatementTable from "./IncomeStatementTable";
import MonthSelect from "./MonthSelect";
import CategoryFilter from "./CategoryFilter";
import FilterContext from "./FilterContext";
import {getIncomeStatement} from "./apiMock";

import "./styles.css";

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [periods, setPeriods] = useState([]);
    const [currentPeriod, setCurrentPeriod] = useState("")
    const [keyword, setKeyword] = useState("");

    const filters = {
        currentPeriod,
        keyword
    }

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
        fetchData().catch(e => console.log(e));
    }, []);

    const handleSelect = (selection) => {
        setCurrentPeriod(selection);
    }

    const handleFilter = (e) => {
        setKeyword(e.target.value);
    }

    return isLoading
        ? <p>Loading...</p>
        :
        <FilterContext.Provider value={filters}>
            <div className="App">
            <h1>Income Statement</h1>
            <MonthSelect options={periods} onClick={handleSelect}/>
            <CategoryFilter keyword={keyword} onChange={handleFilter}/>
            <IncomeStatementTable data={data} showPeriod={currentPeriod}/>
        </div>
        </FilterContext.Provider>;
}

export default App;
