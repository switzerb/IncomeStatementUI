import React from "react";

import "./Section.css";

const Section = ({label, children}) => {
    return (<div className="Section">
        {label && <h2>{label}</h2>}
        {children}
    </div>);
}
export default Section;
