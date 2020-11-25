import React, { useState } from "react";

import "./MonthSelect.css";

export const SelectOptions = {
    QUARTERLY: "Quarterly",
    MONTHLY: "Monthly"
};

export const Periods = {
    Q1: "Q1",
    Q2: "Q2",
    Q3: "Q3",
    Q4: "Q4"
}

export const MonthSelect = ({onClick}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(SelectOptions["QUARTERLY"]);

    const toggleOpen = () => {
        setOpen(!open);
    }

    const handleSelect = (option) => {
        onClick(option);
        setSelected(option);
        setOpen(false);
    }

    return (
        <div className="MonthSelect">
            <div className="MonthSelect-label">Show Statement By</div>
            <div
                onClick={toggleOpen}
                className="MonthSelect-selected"
            >
                <div
                    onClick={toggleOpen}
                    className="MonthSelect-toggle"
                >
                    { open ? "^" : "v" }
                </div>
                {selected === "" ? "Fiscal Quarter" : selected }
                { open
                    ? <div className="MonthSelect-options">
                        <div onClick={() => handleSelect(SelectOptions["QUARTERLY"])}>Quarterly</div>
                        <div onClick={() => handleSelect(SelectOptions["MONTHLY"])}>Monthly</div>
                    </div>
                    : null
                }
            </div>
        </div>);
}
