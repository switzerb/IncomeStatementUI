import React, { useState } from "react";

import "./MonthSelect.css";

const MonthSelect = ({options, onClick}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const toggleOpen = () => {
        setOpen(!open);
    }

    const handleSelect = (option) => {
        onClick(option);
        setSelected(option);
        setOpen(false);
    }

    const handleClear = () => {
        onClick("");
        setSelected("")
        setOpen(false);
    }

    return (
        <div className="MonthSelect">
            <div className="MonthSelect-label">Select Time Range</div>
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
                        <div onClick={handleClear}>Fiscal Quarter</div>
                        {options.map(option => <div key={option} onClick={() => handleSelect(option)}>{option}</div>)}
                    </div>
                    : null
                }
            </div>
        </div>);
}

export default MonthSelect;
