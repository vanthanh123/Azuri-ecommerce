import React from "react";
import PropTypes from "prop-types";
import Button from "../component/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { set } from "../redux/productViewModal/productModalSlice";
import { addItemCart } from "../redux/productShipping/productShippingSlice";

const ProductCard = (props) => {
    const data = props.data;
    const dispatch = useDispatch(null);
    const handleAddItemCart = () => {
        dispatch(addItemCart({
            slug: data.slug,
            color: data.color[0],
            size: data.size[0],
            price: data.sale ? (data.price * (100 - data.sale) / 100).toFixed(2) : (data.price).toFixed(2),
            quantity: 1
        }))
        console.log(data);
    }
    return (
        <div className="product-card">
            <div className="product-card__header">
                <Link to={`/catalog/${data.slug}`}>
                    <div className="product-card__header__img">
                        <img src={data.img1} alt="img" />
                        <img src={data.img2} alt="img" />
                    </div>
                </Link>

                <div className="product-card__header__icon">
                    <div className="icon-heart">
                        <i className="bx bx-heart"></i>
                    </div>
                    <div className="icon-quick-view" onClick={() => dispatch(set(data.slug))}>
                        <i className="bx bx-crosshair"></i>
                    </div>
                </div>
                <div className="product-card__header__label">
                    {data.new && <div className="label-new">NEW</div>}
                    {data.sale && (
                        <div className="label-sale">{data.sale}%</div>
                    )}
                </div>
                <div className="product-card__header__button">
                    <Button full={true} bg="black" onClick={handleAddItemCart}>
                        THÊM GIỎ HÀNG
                    </Button>
                </div>
            </div>
            <div className="product-card__body">
                <Link to={`/catalog/${data.slug}`}>
                    <div className="product-card__body__title">{data.name}</div>
                </Link>
                <div className="product-card__body__price">
                    <div className={data.sale ? "price-old " : "price-new"}>
                        ${data.price}
                    </div>
                    {data.sale && (
                        <div className="price-new">
                            $
                            {((data.price * (100 - data.sale)) / 100).toFixed(
                                2
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ProductCard;
