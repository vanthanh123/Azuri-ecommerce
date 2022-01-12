import React from "react";
import {  useSelector } from "react-redux";
import CartItemView from "../component/CartItemView";
import { dataProduct } from "../data/products";
import SubTotalCart from "../component/SubTotalCart";

const Cart = () => {
    const cartItems = useSelector((state) => state.productShipping.value);
    const data = dataProduct.getCartItemDetail(cartItems);
    return (
        <div className="cart">
            <div className="container">
                <div className="cart__title">Giỏ Hàng</div>
                <div className="cart__header">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-md-2 col-2 fw-bold">Hình</div>
                                <div className="col-md-3 col-3 fw-bold">
                                    Tên Sản Phẩm
                                </div>
                                <div className="col-md-1 col-1 fw-bold">Giá</div>
                                <div className="col-md-3 col-3 fw-bold">Số Lượng</div>
                                <div className="col-md-2 col-2 fw-bold">Tổng Giá</div>
                                <div className="col-md-1 col-1 fw-bold">Xóa</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-0"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-sm-12">
                        {data.map((item, i) => (
                            <div key={i}>
                                <CartItemView data={item} />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <SubTotalCart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
