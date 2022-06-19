import React from "react";
import logo from "../../config/images/res-logo.png";

const Footer = () => {
    return (

        <div className={"bg-red-200 lg:py-4 lg:px-12 lg:px-24 flex items-center flex-col md:flex-row justify-center "}>
            {/*//main footer*/}
            <div>
                <div className="grid grid-col-1 lg:grid-cols-4 container mx-auto px-4">
                    {/* logo */}
                    <div className="logo">
                        <div className={"   flex flex-col items-center md:items-start py-4"}>
                            <img src={logo} alt="logo__footer" className="w-16 h-16 " />
                            {/* title */}
                            <h5 className="font-semibold text-base">Tasty Treat</h5>
                            {/* paragraph */}
                            <p className="text-sm w-2/3 py-2 text-[#333]  leading-7">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            </p>
                        </div>
                    </div>
                    {/* section1 deliveryTime*/}
                    <section className="group  px-2 py-2 w-80 ">
                        <h4 className="text-lg text-[#212245] font-semibold">
                            زمان ارسال{" "}
                        </h4>
                        <div className="mt-2 sm:flex justify-between md:flex-col">
                            <div className="top py-4">
                                <div className="text-sm font-base text-gray-600">
                                    <span className="text-base font-semibold text-[#212245]">
                                        پنج شنبه{" "}
                                    </span>{" "}
                                    {"- "}
                                    <span className="text-base font-semibold text-[#212245]">
                                        شنبه
                                    </span>
                                </div>
                                <div className="text-xs text-gray-600">
                                    <span className="text-sm font-base text-[#212245]">
                                        10:00
                                    </span>{" "}
                                    {"- "}
                                    <span className="text-sm font-base text-[#212245]">
                                        24:00
                                    </span>
                                </div>
                            </div>
                            <div className="down py-4 bg-transparent">
                                <div className="text-lg font-base text-gray-600">
                                    <span className="text-base font-semibold text-[#212245]">
                                        جمعه{" "}
                                    </span>
                                </div>
                                <div className="text-xs text-gray-600">
                                    <span className="text-sm font-base text-[#212245]">
                                        روز تعطیل
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* section2 contact */}
                    <section className="group  px-2 py-2 w-80 ">
                        <h4 className="text-lg text-[#212245] font-semibold">
                            ارتباط با ما{" "}
                        </h4>
                        <div className="mt-2 ">
                            <div className="top py-4">
                                <div className=" text-gray-600 ">
                                    <span className="px-2">
                                        تهران جام جم میدان آرژانتین پلاک 
                                    </span>
                                    <span className="text-base font-semibold text-[#212245]">
                                        {" "}
                                        : مکان {" "}
                                    </span>
                                </div>
                            </div>
                            <div className="py-4 text-right">
                                <div className="middle  bg-transparent flex  items-center">
                                    <div className=" text-gray-600 ">

                                        <span className="text-base font-semibold text-[#212245]">
                                        {" "}
                                           تلفن {" "}  :
                                    </span>
                                    </div>
                                    
                                </div>
                                <div className="down  bg-transparent flex  items-center">
                                    <div className="text-lg font-base text-gray-600">
                                        <span className="text-base font-semibold text-[#212245] ">
                                            {" "}
                                            Email :{" "}
                                        </span>{" "}
                                    </div>
                                    <div className="text-xs text-gray-600 px-4">
                                        <span className="text-sm font-base text-[#212245]">
                                            Amirsaki06@gmail.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* section3 newsletter */}
                    <section className="group  px-1 py-1 w-80 ">
                        <h4 className="text-lg text-[#212245] font-semibold">
                            ارتباط با ما {" "}
                        </h4>
                        <div className="mt-2">
                            <p className="text-sm  py-4 text-[#212245]">
                                اشتراک ویژه ما را تهیه کنید.{" "}
                            </p>
                            {/*input and form for newsletter*/}
                            <form className="top py-4 flex items-center justify-between">
                                <div
                                    className={"flex items-center  border border-gray-500 rounded-md px-1 py-1 "}
                                >
                                    <input
                                        className={"px-2 py-1 text-xs bg-transparent w-64 outline-0"}
                                        type="text"
                                        placeholder={"Enter your Email "}
                                    />
                                    {/*send your Email*/}
                                    <div
                                        className={"w-14 h-8 bg-slate-700 rounded-md flex items-center justify-center text-gray-50"}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 rotate-45 "
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </div>
                                </div>
                            </form>
                            {/*  social media*/}
                        </div>
                    </section>
                </div>
            </div>
            {/*down footer*/}
            {/*<div className={"grid md:grid-cols-2 sm:grid-cols-1"}>*/}
            {/*  <div className={"left mb-4 flex items-center h-full"}>*/}
            {/*    <p className={" text-xs font-bold text-red-600"}>*/}
            {/*      CopyRight-2022 develop by{" "}*/}
            {/*      <span className={"underline font-bold "}>amirSa025</span> .All Right*/}
            {/*      Reserve*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*  <div*/}
            {/*    className={*/}
            {/*      "right socialLinks flex items-center gap-6 md:justify-end sm:justify-start"*/}
            {/*    }*/}
            {/*  >*/}
            {/*    <span className={"text-gray-700 text-sm font-base"}>fallow:</span>*/}
            {/*    /!*social media *!/*/}
            {/*    /!*  1*!/*/}
            {/*    <span*/}
            {/*      className={*/}
            {/*        "w-6 h-6 rounded-full bg-red-600 flex items-center justify-center"*/}
            {/*      }*/}
            {/*    >*/}
            {/*      <svg*/}
            {/*        xmlns="http://www.w3.org/2000/svg"*/}
            {/*        viewBox="0 0 24 24"*/}
            {/*        width="18"*/}
            {/*        height="18"*/}
            {/*      >*/}
            {/*        <path fill="none" d="M0 0h24v24H0z" />*/}
            {/*        <path*/}
            {/*          d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"*/}
            {/*          fill="rgba(255,255,255,1)"*/}
            {/*        />*/}
            {/*      </svg>*/}
            {/*    </span>*/}
            {/*    /!*2*!/*/}
            {/*    <span*/}
            {/*      className={*/}
            {/*        "w-6 h-6 rounded-full bg-red-600 flex items-center justify-center"*/}
            {/*      }*/}
            {/*    >*/}
            {/*      <svg*/}
            {/*        xmlns="http://www.w3.org/2000/svg"*/}
            {/*        viewBox="0 0 24 24"*/}
            {/*        width="18"*/}
            {/*        height="18"*/}
            {/*      >*/}
            {/*        <path fill="none" d="M0 0h24v24H0z" />*/}
            {/*        <path*/}
            {/*          d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"*/}
            {/*          fill="rgba(255,255,255,1)"*/}
            {/*        />*/}
            {/*      </svg>*/}
            {/*    </span>*/}
            {/*    /!*    3*!/*/}
            {/*    <span*/}
            {/*      className={*/}
            {/*        "w-6 h-6 rounded-full bg-red-600 flex items-center justify-center"*/}
            {/*      }*/}
            {/*    >*/}
            {/*      <svg*/}
            {/*        xmlns="http://www.w3.org/2000/svg"*/}
            {/*        viewBox="0 0 24 24"*/}
            {/*        width="18"*/}
            {/*        height="18"*/}
            {/*      >*/}
            {/*        <path fill="none" d="M0 0h24v24H0z" />*/}
            {/*        <path*/}
            {/*          d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"*/}
            {/*          fill="rgba(255,255,255,1)"*/}
            {/*        />*/}
            {/*      </svg>*/}
            {/*    </span>*/}
            {/*    /!*4*!/*/}
            {/*    <span*/}
            {/*      className={*/}
            {/*        "w-6 h-6 rounded-full bg-red-600 flex items-center justify-center"*/}
            {/*      }*/}
            {/*    >*/}
            {/*      <svg*/}
            {/*        xmlns="http://www.w3.org/2000/svg"*/}
            {/*        viewBox="0 0 24 24"*/}
            {/*        width="16"*/}
            {/*        height="16"*/}
            {/*      >*/}
            {/*        <path fill="none" d="M0 0h24v24H0z" />*/}
            {/*        <path*/}
            {/*          d="M19.606 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.5 6 12 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592C4.285 7.419 4 9.196 4 12s.285 4.58.394 5.006c.076.297.292.522.538.59C5.372 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592C19.715 16.581 20 14.8 20 12s-.285-4.58-.394-5.005zm1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5v-7l6 3.5-6 3.5z"*/}
            {/*          fill="rgba(255,255,255,1)"*/}
            {/*        />*/}
            {/*      </svg>*/}
            {/*    </span>*/}
            {/*  </div>*/}
            {/*</div>*/}
        </div>);
};

export default Footer;
