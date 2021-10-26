import React from "react";
import PropTypes from "prop-types";
import Button from "../component/Button"

const ProductCard = (props) => {
    const data = props.data;
    return (
        <div className="product-card">
            <div className="product-card">
                <div className="product-card__header">
                    <div className="product-card__header__img">
                        <img src={data.img1} alt="img" />
                        <img src={data.img2} alt="img" />
                    </div>
                    <div className="product-card__header__icon">
                        <div className="icon-heart">
                            <box-icon name="heart"></box-icon>
                        </div>
                        <div className="icon-quick-view">
                            <box-icon name="crosshair"></box-icon>
                        </div>
                    </div>
                    <div className="product-card__header__label">
                        {data.new && <div className="label-new">NEW</div>}
                        {data.sale && <div className="label-sale">{data.sale}%</div>}
                    </div>
                    <div className="product-card__header__button">
                        <Button full={true} bg="black">THÊM GIỎ HÀNG</Button>
                    </div>
                </div>
                <div className="product-card__body">
                    <div className="product-card__body__title">
                        {data.name}
                    </div>
                    <div className="product-card__body__price">
                        <div className={data.sale ? "price-old " : "price-new"}>${data.price}</div>
                        {data.sale && <div className="price-new">${(data.price * (100 - data.sale) / 100).toFixed(2)}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ProductCard;
