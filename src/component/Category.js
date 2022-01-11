import React from "react";
import PropTypes from "prop-types";

const Category = (props) => {
    return (
        <div className="category">
            <div className="container">
                <div className="row">
                    {props.data.map((item, i) => (
                        <div key={i} className="col-md-4 col-4">
                            <div className="category__inner">
                                <div className="category__header">
                                    {item.display}
                                </div>
                                <div className="category__body">
                                    <img src={item.img} alt="category" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Category;
