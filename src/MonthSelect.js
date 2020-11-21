import React, { useState } from "react";

const MonthSelect = ({options, onClick}) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    const handleSelect = (option) => {
        onClick(option);
        setOpen(false);
    }

    return (
        <div className="selectBox">
            <div onClick={toggleOpen}>Filter By Financial Period</div>
            { open
                ? <>
                    <div onClick={() => handleSelect("All")}>
                        Show Quarter
                    </div>
                    {options.map(option => <div onClick={() => handleSelect(option)}>{option}</div>)}}
                </>
                : null
            }
        </div>);
}

export default MonthSelect;
