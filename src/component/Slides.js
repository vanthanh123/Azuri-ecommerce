import React from "react";
import PropTypes from "prop-types";
import Button from "../component/Button";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const Slides = (props) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const data = props.data;
    const automatic = props.automatic ? 3000 : "";

    const handleToTop = () => {
        window.scrollTo(0, 0);
    }
   

    const prevSlide = () => {
        const index = activeSlide === 0 ? data.length - 1 : activeSlide - 1;
        setActiveSlide(index);
    };

    const nextSlide = useCallback(
        () => {
            {
                const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
                setActiveSlide(index);
            };
        },
        [activeSlide,data],
    )

    useEffect(() => {
        if(automatic){
           const auto = setInterval(() =>{
                nextSlide();
            },automatic);
            return () => {
                clearInterval(auto);
            }
        }
    }, [nextSlide,automatic]);

    return (
        <div className="slide">
            {data.map((item, index) => (
                    <div
                        key={index}
                        className={`slide__inner ${
                            activeSlide === index ? "active" : ""
                        }`}
                    >
                        <img src={item.img} alt="slide" />
                        <div className="slide__inner__content">
                            <div className="slide__inner__content__title">
                                {item.title}
                            </div>
                            <div className="slide__inner__content__button">
                                <Link to={"/catalog"} onClick={handleToTop}>
                                <Button>MUA NGAY</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
            ))}
            <div className="slide__control">
                <div onClick={prevSlide} className="prev">
                    &#x3c;
                </div>
                <div onClick={nextSlide} className="next">
                    &#x3e;
                </div>
            </div>
            {
                props.dot && <div className="slide__dot">
                    {data.map((item,i) => (
                        <span key={i} className={activeSlide === i ? "active" : ""}></span>
                    ))}
                </div>
            }
        </div>
    );
};

Slides.propTypes = {
    data: PropTypes.array.isRequired,
    dot: PropTypes.bool,
    automatic: PropTypes.bool,
};

export default Slides;
