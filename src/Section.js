import React, { useState } from "react";
import {formatMoney} from "./utils";

import "./Section.css";

// collapsible
const Section = ({label, total, children}) => {
    const [open, setOpen] = useState(true);

    const toggleOpen = () => setOpen(!open);

    return (
        <div
            className="Section"
            onClick={toggleOpen}
        >
            <div className="Section-toggle">{ open ? "^" : "v" }</div>
            {label && <div className="Section-label">{label}</div>}
            { open
                ? <>
                    {children}
                    {total && <div className="Section-total">Quarterly Total: {formatMoney(total)}</div>}
                </>
                : null
            }
        </div>
    );
}
export default Section;
