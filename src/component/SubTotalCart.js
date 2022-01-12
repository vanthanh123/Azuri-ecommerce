import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import { useState, useEffect } from "react";

const SubTotalCart = (props) => {
    const cartItems = useSelector((state) => state.productShipping.value);

    const getSubTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const [countProduct, setCountProduct] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        setSubTotal(getSubTotal.toFixed(2));
        setCountProduct(cartItems.length);
    }, [getSubTotal, cartItems]);
    return (
        <div className="subTotalCart">
            <div className="subTotalCart__title">
                Bạn đang có {countProduct} sản phẩm trong giỏ hàng
            </div>
            <div className="subTotalCart__content">
                <div className="subTotalCart__content__title">Tổng Cộng</div>
                <div className="subTotalCart__content__subTotal">
                    {subTotal}
                </div>
            </div>
            <div className="subTotalCart__control">
                <Link to="/catalog">
                    <Button full={true} bg="black">
                        Thanh Toán
                    </Button>
                    <Button full={true} bg="black">
                        Tiếp Tục mua
                    </Button>
                </Link>
            </div>
        </div>
    );
};

SubTotalCart.propTypes = {
    data: PropTypes.object,
};

export default SubTotalCart;
