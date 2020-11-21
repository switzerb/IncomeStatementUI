import React from "react";

import "./Section.css";

// collapsible
const Section = ({label, total, children}) => {
    return (<div className="Section">
        {label && <div className="Section-label">{label}</div>}
        {children}
        {total && <div className="Section-total">Quarterly Total: {total}</div>}
    </div>);
}
export default Section;
