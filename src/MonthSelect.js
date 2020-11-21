import React, { useState } from "react";

import "./MonthSelect.css";

const MonthSelect = ({options, onClick}) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    const handleSelect = (option) => {
        onClick(option);
        setOpen(false);
    }

    const handleClear = () => {
        onClick("");
        setOpen(false);
    }

    return (
        <div className="MonthSelect">
            <div
                onClick={toggleOpen}
                className="MonthSelect-label"
            >
                Filter By Financial Period
            </div>
            <div
                onClick={toggleOpen}
                className="MonthSelect-toggle"
            >
                { open ? "^" : "v" }
            </div>
            { open
                ? <div className="MonthSelect-options">
                    <div onClick={handleClear}>
                        Show Quarter
                    </div>
                    {options.map(option => <div onClick={() => handleSelect(option)}>{option}</div>)}
                </div>
                : null
            }
        </div>);
}

export default MonthSelect;
