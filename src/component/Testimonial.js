import React from "react";
import PropTypes from "prop-types";

const Testimonial = (props) => {
    return (
        <div className="testimonial">
            <div className="container">
                <div className="row">
                    {props.data.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div  className="testimonial__inner">
                                <img src={item.img} alt="" />
                                <div className="content">{item.content}</div>
                                <div className="job">{item.job}</div>
                                <div className="name">{item.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Testimonial;
