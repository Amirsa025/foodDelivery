import React, {useEffect, useState} from 'react';
import Helmet from "../components/Hemlets/Hemlet"
import {Link} from "react-router-dom";
import CategoryItem from "../components/UI/Category";
import {featureImage} from "../config/data";
import products from "../config/products";
import ProductCard from "../components/UI/ProductCard";
//image
import foodCategoryImg01 from "../config/images/hamburger.png";
import foodCategoryImg02 from "../config/images/pizza.png";
import foodCategoryImg03 from "../config/images/bread.png";
import heroImg from "../config/images/hero.png"
import whyImg from '../config/images/location.png'
import networkImg from '../config/images/network.png'
import SliderTestimonial from "../components/UI/SliderTestimonial";

const Home = () => {
//    وصل شدن به ارایه
 
const [product, setProducts] = useState(products)
//    برای مقایسه شدن است که اگر یکسان بودند باید در خروجی به ما نمایش دهد
    const [Category, setCategory] = useState('ALL')
    const [hotPizza, setHotPizza] = useState([])
    useEffect(() => {
        const filterdPizza = products.filter(item => item.category === 'Pizza')
        const slicePizza = filterdPizza.slice(0, 4)
        setHotPizza(slicePizza)
    }, [])
    useEffect(() => {
        if (Category === 'ALL') {
            setProducts(products)
        }
        if (Category === 'Burger') {
            const filter = products.filter(item => item.category === 'Burger')
            setProducts(filter)
        }
        if (Category === 'Pizza') {
            const filter = products.filter(item => item.category === 'Pizza')
            setProducts(filter)
        }
        if (Category === 'Bread') {
            const filter = products.filter(item => item.category === 'Bread')
            setProducts(filter)
        }

    }, [Category])
    return (
        <Helmet title="Home">
            <section className={"grid md:grid-cols-2 sm:grid-cols-1 w-full pt-0"}>
                <div className={"heroIcons h-full lg:text-right py-16 px-8 text-center"}>
                    {/*top*/}
                    <h5 className={"font-semibold text-gray-700"}>آسان ترین راه برای سفارش غذایتان </h5>
                    <h1 className={"text-2xl font-bold py-2 text-gray-900 leading-loose"}>گرسنه ای؟ <span
                        className={"text-red-500 font-bold"}>؟خیلی منتظر غذایی</span><span className="text-3xl "> <br/>پس درو باز کن <span
                        className={"text-red-500"}>غذا دم خونته</span> </span></h1>
                    <p className="text-gray-600 text-xs py-2 font-sans leading-relaxed text-[#777]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                    {/*down*/}
                    <div className={"btn-hero flex items-center md:justify-end justify-center gap-5 py-4  font-semibold"}>
                        {/*up order*/}
                        <button
                            className={"btn-hero__orders transition-all duration-300 hover:bg-gray-800  bg-red-500 text-white flex items-center justify-between gap-2 outline-0   rounded-lg px-2 py-2 "}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
                                      fill="rgba(255,255,255,1)"/>
                            </svg>
                            ! سفارش
                            بده

                        </button>
                        {/*see all food btn */}
                        <button
                            className={"allFood_btn border border-red-400 bg-transparent rounded-lg px-2 py-2 text-red-500"}>
                            <Link to={"/foods"}>دیدن تمام غذا ها </Link>
                        </button>
                    </div>
                    {/*    down hero services  */}
                    <div className={"flex md:justify-end justify-center  items-center gap-5 mt-8 font-semibold "}>
                        <p className={"flex items-center justify-end gap-2 text-gray-500 text-[0.9rem] "}>
                            <span>بدون هزینه حمل و نقل</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                 className={"p-1 bg-red-600 rounded-full w-6 h-6"}>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path
                                    d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9l2.513-6.702A2 2 0 0 1 6.386 4h11.228a2 2 0 0 1 1.873 1.298L22 12v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zM4.136 12h15.728l-2.25-6H6.386l-2.25 6zM6.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                    fill="rgba(255,255,255,1)"/>
                            </svg>
                        </p>
                        <p className={"flex items-center justify-center md:justify-end gap-2 text-gray-500 text-[0.9rem]"}>
                            <span>صد درصد  پرداخت امن </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                 className={"p-1 bg-red-600 rounded-full w-6 h-6"}>>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path
                                    d="M11 2l7.298 2.28a1 1 0 0 1 .702.955V7h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11 22l-5.38-3.668A6 6 0 0 1 3 13.374V5.235a1 1 0 0 1 .702-.954L11 2zm0 2.094L5 5.97v7.404a4 4 0 0 0 1.558 3.169l.189.136L11 19.58 14.782 17H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7V5.97l-6-1.876zM11 12v3h9v-3h-9zm0-2h9V9h-9v1z"
                                    fill="rgba(255,255,255,1)"/>
                            </svg>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={heroImg} alt="" className={"right w-full"}/>
                </div>
            </section>
            <section className="pt-0">
        <CategoryItem />
      </section>
            <section className={"container mx-auto px-16 py-16 leading-loose text-center"}>
                <h5 className={"text-md text-red-600  font-semibold mb-4"}>چی میخوای سفارش بدی </h5>
                <h2 className={"text-2xl font-bold text-gray-800 "}> راحت رو مبل بشین تو خونه</h2>
                <h2 className={"text-2xl font-semibold text-gray-800"}><span> ما مراقب <span className={"text-red-600"}> شما خواهیم بود</span>  </span>
                </h2>
                <p className={"mb-1 mt-4 text-[#777] text-sm"}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
                <p className={"mb-1 mt-4 text-[#777] text-sm"}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
            </section>
            {/*category item in home */}
            <section
                className={"container mx-auto px-20 py-12 flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex items-center justify-between"}>
                {featureImage.map((item, id) => {
                    return (
                        <div className={" text-[#777] text-sm  flex items-center flex-col text-center"} key = {id}>
                            <img src={item.imageUrl} alt={item.title} className={"w-20"}/>
                            <h5 className={"text-xl text-gray-700 font-semibold"}>{item.title}</h5>
                            <p className={"py-4 text-[#777] md:text-xs w-full text-sm lg:w-1/2 leading-loosing"}>{item.desc}</p>
                        </div>
                    )
                })}
            </section>
            <section className={"container mx-auto px-8 md:px-16 py-16"}>
                <div className={"grid grid-cols-1 text-center font-bold "}>
                    <h2> غذاهای پرطرفدار </h2>
                </div>
                <div className={" grid grid-cols-1"}>
                    {/*nav product*/}
                    <div className={"food-category flex items-center justify-center text-white gap-8 text-md"}>
                        <button className={`px-3 py-2 text-xs ${Category === 'ALL' ? 'foodActiveCategory' : ''}`}
                                onClick={() => setCategory("ALL")}> همگی غذاها
                        </button>
                        <button
                            className={`flex  items-center gap-2  py-2 px-2 text-xs  ${Category === 'Burger' ? 'foodActiveCategory' : ''}`}
                            onClick={() => setCategory("Burger")}>
                            {"برگر"}
                            <img src={foodCategoryImg01} alt="" className={"w-5 h-5 "}/>
                        </button>
                        <button
                            className={`flex  items-center gap-4 py-2 px-2 text-xs  ${Category === 'Pizza' ? 'foodActiveCategory' : ''}`}
                            onClick={() => setCategory("Pizza")}>
                            پیتزا
                            <img src={foodCategoryImg02} alt="" className={"w-5 h-5 "}/>
                        </button>
                        <button
                            className={`flex  items-center gap-4 py-2 px-2 text-xs ${Category === 'Bread' ? 'foodActiveCategory' : ''}`}
                            onClick={() => setCategory("Bread")}>
                            {"نان"}
                            <img src={foodCategoryImg03} alt="" className={"w-5 h-5 "}/>
                        </button>
                    </div>
                    <div className={"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4"}>
                        {
                            product.map((item, id) => {
                                return (
                                    <ProductCard item={item} key={id}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/*why us testy treat */}
            <section className={"container mx-auto px-16 py-16"}>
                <div className={"grid grid-cols-1 lg:grid-cols-2"}>
                    {/*left*/}
                    <div className={"w-2/3 py-16"}>
                        {/*    image */}
                        <img src={whyImg} alt="" className={"w-full"}/>
                    </div>
                    {/*    right */}
                    <div className={"px-12 py-12"}>
                        {/*top */}
                        <div className={"treatTest__title text-right py-4"}>

                            <h2><span className={"text-red-600 font-semibold text-xl "}>چرا ما بهترینم ؟</span> چون
                                طبیعت ماست</h2>
                            <p className={"leading-loose mt-4 text-xs"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت
                                چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است</p>
                        </div>
                        {/*down*/}
                        <div className={"list-group border "}>
                            {/*    list1*/}
                            <div className={"list-group__item text-right flex flex-col text-[#777] py-4 px-4"}>
                                <div className={"flex items-center text-right justify-end"}>
                                    {/*title*/}
                                    <span className={"px-2 text-sm md:text-md lg:text-lg text-gray-800 font-semibold"}>تازه و استفاده از مواد اولیه عالی  </span>
                                    {/*icon*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                                    </svg>
                                </div>
                                <div className={"text-xs py-4 leading-loose"}>
                                    {/*    paraph*/}
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                        است</p>
                                </div>
                            </div>
                            {/*    list2*/}
                            <div
                                className={"list-group__item text-right flex flex-col text-[#777] border-t  py-4 px-4"}>
                                <div className={"flex items-center text-right justify-end"}>
                                    {/*title*/}
                                    <span className={"px-2 text-sm md:text-md lg:text-lg text-gray-800 font-semibold"}>تازه و استفاده از مواد اولیه عالی  </span>
                                    {/*icon*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                                    </svg>
                                </div>
                                <div className={"text-xs py-4 leading-loose"}>
                                    {/*    paraph*/}
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                        است</p>
                                </div>
                            </div>
                            {/*    list3*/}
                            <div
                                className={"list-group__item text-right flex flex-col text-[#777] border-t  py-4 px-4"}>
                                <div className={"flex items-center text-right justify-end"}>
                                    {/*title*/}
                                    <span className={"px-2 text-sm md:text-md lg:text-lg text-gray-800 font-semibold"}>تازه و استفاده از مواد اولیه عالی  </span>
                                    {/*icon*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                                    </svg>
                                </div>
                                <div className={"text-xs py-4 leading-loose"}>
                                    {/*    paraph*/}
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                                        است</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*        hot pitzza */}
            <section className={"container mx-auto px-16 pt-0"}>
                <div className={"py-4"}>
                    <h2 className={"text-center text-bold text-2xl"}>Hot Pizza </h2>
                </div>
                <div className={""} >
                    <div className={"flex flex-col md:flex-row items-center justify-between py-4 grid md:grid-cols-3 gap-4 lg:grid-cols-4"}>
                        {
                            hotPizza.map((item , id )=>{
                                return (

                                    <div key={id} >
                                        <ProductCard item={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        {/*    testimonial*/}
            <section className={"container mx-auto px-16 py-16"}>
                {/*Title*/}
                <div className={"grid  grid-col-1 lg:grid-cols-2"}>
                    {/*left*/}
                    <div className={""}>
                        <img src={networkImg} alt="" className={"w-1/2"}/>
                    </div>
                    {/*    right*/}
                    <div className={"text-right -z-10"}>
                        <h5 className={"text-red-500"}>Testimonial</h5>
                        {/*subTitle*/}
                        <div className={"Testimonial__title py-4"}>
                            <h6 className={"text-3xl text-gray-900 font-semibold "}>
                                <> نظرات </>
                                <span className={"font-semibold text-red-600"}>مشتریان ما  </span>
                                <> درباره سرویس کاری  </>
                            </h6>
                        </div>
                    {/*    Testimonial__desc*/}
                        <p className={"Testimonial__desc"}></p>
                        <div className={"grid grid-cols-1 -z-10"}>
                            <SliderTestimonial/>
                        </div>
                    </div>

                </div>
            </section>

        </Helmet>
    );
};

export default Home;
