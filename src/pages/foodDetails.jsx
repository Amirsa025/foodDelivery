import React, {useState, useEffect} from 'react';
import Helmet from "../components/Hemlets/Hemlet";
import CommonSection from "../components/UI/commonSection/CommonSection";
import productImg from "../config/images/product_2.1.jpg"
import {useParams} from "react-router-dom";
import products from "../config/products";
import ProductCard from "../components/UI/ProductCard";
import {useDispatch} from "react-redux"
import {cartAction} from "../store/shopping-cart/cartSlice";

const FoodDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const [tabs, setTabs] = useState('desc')
    const [name, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [reviewMsg, setReviewMsg] = useState("");


    const product = products.find(item => item.id === id)
    const {price, title, category, desc, image01} = product
    const reltedProduct = products.filter(item => category === item.category)
    const [preveiwImg, setPreveiwImg] = useState(product.image01)
    useEffect(() => {
        setPreveiwImg(product.image01)
    }, [product])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])
    //function
    const addItem = () => {
        dispatch(cartAction.addItem({
            id, title, category, price, image01
        }))
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        console.log(name,enteredEmail,reviewMsg)
    }

    return (
        <Helmet title=" product-details ">
            <div className={"h-full"}>
                <CommonSection title={title}/>
            </div>
            <div className="grid grid-col-12 md:grid-col-2 flex px-12" dir={"rtl"}>
                <div className={" flex items-center flex-col sm:flex-row"}>
                    <div className="product-details_image py-12 flex sm:flex-col items-center flex-row justify-center gap-12 sm:gap-4">
                        <div className="image_item   w-1/6  " onClick={() => setPreveiwImg(product.image01)}>
                            <img src={product.image01} alt=""/>
                        </div>
                        <div className="image_item    w-1/6   " onClick={() => setPreveiwImg(product.image02)}>
                            <img src={product.image02} alt=""/>
                        </div>
                        <div className="image_item  w-1/6  " onClick={() => setPreveiwImg(product.image03)}>
                            <img src={product.image03} alt=""/>
                        </div>
                    </div>
                    <div className={"flex items-center gap-4 mt-12 flex-wrap"}>
                        <img src={preveiwImg} alt="" className="image_item  w-1/2  "/>
                        <div className={"flex flex-col justify-start  h-full px-4 mb-[10rem] "}>
                            <h2 className={"text-2xl font-semibold"}>{title} </h2>
                            <div className={"py-4"}>
                                                <span className="text-red-500 gap-4 flex font-semibold items-center">
                                                    <span className={"text-xl "}>قیمت : </span> {" "}
                                                    {price}
                                                </span>
                                <p className={"py-1 flex items-center gap-3"}>
                                    دسته بندی : {" "}
                                    <span className="text-sm bg-red-300 px-2 text-white">{category}</span>
                                </p>
                            </div>
                            <button onClick={addItem}
                                    className={"bg-red-600  text-red-50 py-2 mt-4 rounded-lg cursor-pointer  "}> افزودن
                                به سبد خرید
                            </button>
                        </div>
                    </div>

                </div>
                <div className={"py-8 px-2 sm:-mt-14 md:mt-12 mb-2 text-justify"}>
                    <div className="tab_pills py-4 flex items-center  gap-6 ">
                        <div className={`${tabs === 'desc' ? 'font-semibold text-red-600 cursor-pointer' : ''}`}
                             onClick={() => setTabs('desc')}>
                            نقد و بررسی
                        </div>
                        <div className={`${tabs === 'rev' ? 'font-semibold text-red-600 cursor-pointer' : ''}`}
                             onClick={() => setTabs('rev')}>
                            نظرات
                        </div>

                    </div>
                    <hr className="py-4"/>
                    {tabs === 'desc' ?
                        <div>
                            <p className="grid grid-col-12" dir={"ltr"}>
                                {desc}
                            </p>
                            <div className=" px-12 py-4 ">
                                <h2 className={"font-semibold text-2xl"}>غذاهایی که ممکن دوست داشته باشید</h2>
                                <div
                                    className="flex item-center gap-4 grid grid-col-12 md:grid-cols-3 lg:grid-cols-4   ">
                                    {
                                        reltedProduct.map((item, id) => {
                                            return (

                                                <ProductCard item={item}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>


                        :
                        <>
                            <div className="tab-form mb-3 flex flex-col  items-start">
                                <div className={"review"}>
                                    <p className={"py-1 text-base font-semibold"}>امیرمحمدساکی زاده </p>
                                    <p className={"py-1  text-sm text-gray-600"}>amirsaki06@gmail.com</p>
                                    <p className={"py-4  text-sm text-gray-600"}>غذای لذیذ</p>
                                </div>
                                <div className={"review"}>
                                    <p className={"py-1 text-base font-semibold"}>امیرمحمدساکی زاده </p>
                                    <p className={"py-1  text-sm text-gray-600"}>amirsaki06@gmail.com</p>
                                    <p className={"py-4  text-sm text-gray-600"}>غذای لذیذ</p>
                                </div>
                                <div className={"review"}>
                                    <p className={"py-1 text-base font-semibold"}>امیرمحمدساکی زاده </p>
                                    <p className={"py-1  text-sm text-gray-600"}>amirsaki06@gmail.com</p>
                                    <p className={"py-4  text-sm text-gray-600"}>غذای لذیذ</p>
                                </div>
                            </div>
                            <div className=" w-full  md:w-2/4  mx-auto my-6">

                                <form action="" className={" px-4 bg-red-200"} onSubmit={submitHandler}>
                                    <div className="from__group my-3 py-3 ">
                                        <input type="text" placeholder={" نام خود را وارد کنید..."}
                                               onChange={(event) => setEnteredName(event.target.value)}
                                               required
                                               className={"border-b placeholder-gray-500 border-gray-800 px-2 py-1 outline-0 w-full bg-transparent text-gray-800"}/>
                                    </div>
                                    <div>
                                        <input type="text" placeholder={" نام خود را وارد کنید..."}
                                               onChange={(event) => setEnteredEmail(event.target.value)}
                                               className={"border-b placeholder-gray-500  border-gray-800 px-2 py-2 outline-0 w-full bg-transparent"}/>
                                    </div>
                                    <div className="from__group my-3">
                                <textarea name="" id="" cols="30" rows="10" placeholder="لطفا بازخورد خود را بنویسید..."
                                          onChange={(event) => setReviewMsg(event.target.value)}
                                          className={"border-b  placeholder-gray-500 border-gray-800 py-2 px-2 w-full bg-transparent outline-0"}></textarea>
                                    </div>
                                    <div className={""}>
                                        <button className={" bg-red-500 px-2 py-2 mb-3 rounded-lg  text-white"}>ثبت
                                            نظرات
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    }
                </div>

                <div>


                </div>

            </div>
        </Helmet>
    );
};

export default FoodDetails;
