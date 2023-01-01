import React from 'react';
import Slider from "react-slick";
import ava01 from "../../config/images/ava-1.jpg";
import ava02 from "../../config/images/ava-2.jpg";
import ava03 from "../../config/images/ava-3.jpg";

const SliderTestimonial = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} >
            <div className={""}>
                <div>
                    <p className="review__text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                    <div className=" slider__content flex items-center gap-3 justify-end w-full">
                        <div className={"flex items-center pt-4 gap-4"}>
                            <h6>تاوان </h6>
                            <img src={ava01} alt="avatar" className=" w-20 h-20 rounded-full"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className="review__text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                    <div className=" slider__content flex items-center gap-3 justify-end w-full">
                        <div className={"flex items-center pt-4 gap-4"}>
                            <h6>تاوان </h6>
                            <img src={ava02} alt="avatar" className=" w-20 h-20 rounded-full"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className="review__text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                    <div className=" slider__content flex items-center gap-3 justify-end w-full">
                        <div className={"flex items-center pt-4 gap-4"}>
                            <h6>تاوان </h6>
                            <img src={ava03} alt="avatar" className=" w-20 h-20 rounded-full"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className="review__text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                    <div className=" slider__content flex items-center gap-3 justify-end w-full">
                        <div className={"flex items-center pt-4 gap-4"}>
                            <h6>تاوان </h6>
                            <img src={ava03} alt="avatar" className=" w-20 h-20 rounded-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default React.memo(SliderTestimonial);
