import React from 'react';
import  {category} from '../../config/data'
const Category = () => {
    return (
        <div className={"container mx-auto px-24 py-8"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 flex justify-center"}>
                {category.map((item,id)=>{
                    return (
                        <div key={id} className={"category_Item  flex items-center gap-3 bg-red-200 py-6 px-2 rounded-md cursor-pointer transition-all duration-300  hover:-translate-y-4"}>
                            <div className={"category_ImageUrl"} >
                                <img src={item.ImageUrl} alt={item.display}/>
                            </div>
                            <h6 className={"text-lg font-semibold"}>{item.display}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Category;