import React from "react";

import "./Section.css";

// collapsible
const Section = ({label, total, children}) => {
    return (<div className="Section">
        {label && <h2>{label}</h2>}
        {children}
        {total && <div>Quarterly Total: {total}</div>}
    </div>);
}
export default Section;
