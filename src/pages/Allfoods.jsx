import React, {useState} from 'react';
import CommonSection from "../components/UI/commonSection/CommonSection";
import Helmet from "../components/Hemlets/Hemlet";
import products from "../config/products";
import ProductCard from "../components/UI/ProductCard";
import ReactPaginate from "react-paginate";
const AllFoods = () => {
    const [searchTerm,setSearchTerm]=useState("")
    const[pageNumber,setPageNumber] = useState(0)
    const productPerPage = 12
    const visitedPage = pageNumber * productPerPage
    const displayPage = products.slice(visitedPage,visitedPage+productPerPage)
    const pageCount = Math.ceil(products.length/productPerPage)
    const changePage = ({selected})=>{
        setPageNumber(selected)
    }
    return (
        <Helmet title="AllFoods">
            <CommonSection title=" غذاها "/>
            <section>
                <div className="container px-8 py-6 px-12 ">
                    {/*container*/}
                    {/*filter and sorting*/}
                    <div className="grid sm:grid-cols-2 grid-col-12 justify-center items-center  lg:grid-cols-2  flex ">
                        <div className="search_Widget flex items-center">
                            <div className = "border border-gray-400  px-2  py-1 rounded-lg  flex items-center ">
                                    <span className = "text-gray-400 text-lg">
                                <i className="ri-search-line"></i>
                            </span>
                                <input value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)} type="text " className="search outline-0 bg-transparent  px-2" placeholder=" من به دنبال .... " />
                            </div>

                        </div>
                        <div className = "sorting-widgets py-4 text-right ">
                            <select name="sorting" id="sort" className="outline-0 border w-64 px-2 py-1">
                                <option value="default">default</option>
                                <option value="ascending">ascending</option>
                                <option value="descending">descending</option>
                                <option value="high-price">highPrice</option>
                                <option value="low-price ">lowPrice</option>
                            </select>
                        </div>
                    </div>
                    {/*filter and sorting*/}
                    {/*products*/}
                    <div className = "flex item-center gap-4 grid grid-col-12 md:grid-cols-3 lg:grid-cols-4  px-12 ">
                        {displayPage.filter(item =>{
                            if (searchTerm===""){
                                return  item
                            }
                            if( item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return item
                            }
                        }).

                        map((item,id)=>{
                            return (
                                <ProductCard key={id} item = {item} />
                            )
                        })}
                    </div>
                    {/*react paginate*/}
                    <div className = "flex items-center ">
                        <ReactPaginate
                            pageCount={pageCount}
                            onPageChange={changePage}
                            previousLabel=" قبلی "
                           nextLabel=" بعدی"
                            containerClassName="paginateBtns"
                        />
                    </div>
                    {/*react paginate*/}
                    {/*products*/}
                    {/*container*/}
                </div>
            </section>
        </Helmet>
    );
};

export default AllFoods;
