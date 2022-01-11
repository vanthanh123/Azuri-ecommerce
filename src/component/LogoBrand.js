import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, { Autoplay } from "swiper";

import "swiper/swiper.scss";

swiperCore.use([Autoplay]);

const LogoBrand = (props) => {
    return (
        <div className="logo-brand">
            <div className="container">
                <div className="row">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={6}
                        autoplay={{
                            delay: 2500,
                        }}
                        breakpoints={{
                            "0" : {
                                "slidesPerView" : 3,
                            },
                            "600": {
                                "slidesPerView" : 4,
                            }
                        }}
                    >
                        {props.data.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <img src={item.img} alt="logobrand" />
                                </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

LogoBrand.propTypes = {
    data: PropTypes.array,
};

export default LogoBrand;
