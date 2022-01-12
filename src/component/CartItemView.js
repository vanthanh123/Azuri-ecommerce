import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { updateItemCart, removeItem } from "../redux/productShipping/productShippingSlice";

import {useDispatch} from "react-redux";
const CartItemView = (props) => {
    const data = props.data;

    const [total, setTotal] = useState(data.product.price * data.quantity);
    const [quantity, setQuantity] = useState(data.quantity);
    const dispatch = useDispatch(null)

    const handleQuantity = (type) => {
        if(type === "plus"){
            dispatch(updateItemCart({...data, quantity: quantity + 1}))
        }else{
            dispatch(updateItemCart({...data, quantity: quantity > 1 ? quantity -1 : 1}))
        }
    };

    const price = data.product.sale ? (data.product.price * (100 - data.product.sale) / 100).toFixed(2) : (data.product.price).toFixed(2);

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }

    useEffect(() => {
        setTotal((price * data.quantity).toFixed(2));
        setQuantity(data.quantity)
    }, [data,price]);

    return (
        <div className="cartItem">
                    <div className="cartItem__content">
                        <div className="row">
                            <div className="col-md-2 col-2">
                                <div className="cartItem__content__img">
                                    <img
                                        src={data.product.img1}
                                        alt={data.product.img1}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3 col-3">
                                <div className="cartItem__content__name">
                                    {data.product.name}
                                </div>
                            </div>
                            <div className="col-md-1 col-2">
                                <div className="cartItem__content__price">
                                    {price}
                                </div>
                            </div>
                            <div className="col-md-3 col-2">
                                <div className="cartItem__content__quantity">
                                    <div
                                        className="cartItem__content__quantity__minus"
                                        onClick={() => handleQuantity("minus")}
                                    >
                                        <i className="bx bx-minus"></i>
                                    </div>
                                    <div className="cartItem__content__quantity__input">
                                        {data.quantity}
                                    </div>
                                    <div
                                        className="cartItem__content__quantity__plus"
                                        onClick={() => handleQuantity("plus")}
                                    >
                                        <i className="bx bx-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-2">
                                <div className="cartItem__content__total">
                                    {total}
                                </div>
                            </div>
                            <div className="col-md-1 col-1">
                                <div className="cartItem__content__remove">
                                    <i className="bx bx-trash" onClick={() => handleRemoveItem(data)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

CartItemView.propTypes = {
    data: PropTypes.object,
};

export default CartItemView;
