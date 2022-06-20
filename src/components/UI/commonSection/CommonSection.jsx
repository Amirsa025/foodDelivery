import React from 'react';

const CommonSection = ({title}) => {
    return (
        <section className={ "common_Sections   linear-customize"}>
            <div className={ "contaier px-8 " }>
                <h2 className={"text-2xl text-white"}>{title}</h2>
            </div>
        </section>
    );
};

export default CommonSection;
