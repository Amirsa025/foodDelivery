import React from "react";

const Helmet = ({title,children}) => {
    document.title = title;
    return <div className="w-full">{children}</div>;
};

export default Helmet;