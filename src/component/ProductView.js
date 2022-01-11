import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Button from "../component/Button";
import { withRouter } from 'react-router-dom';

const ProductView = (props) => {
    let product = props.data;

    if (product === undefined) {
        product = {
            price:0,
            imgPreview: '',
            quantity: 1,
            color: [],
            size: []
        }
    }

    const [imgPreview, setImgPreview] = useState(product.img1);

    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(
        product.sale
            ? ((product.price * (100 - product.sale)) / 100).toFixed(2)
            : product.price
    );
    const [toggleExpand, setToggleExpand] = useState(false);

    const handleQuantity = (type) => {
        if(type === "plus"){
            setQuantity(quantity + 1);
        }else{
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    }

    useEffect(() => {
        setColor(undefined);
        setSize(undefined);
        setQuantity(1);
        setImgPreview(product.img1);
        setPrice(product.sale
            ? ((product.price * (100 - product.sale)) / 100).toFixed(2)
            : product.price);
    }, [product]);

    const check = () => {
        if(color === undefined) {
            alert("Bạn chưa chọn màu");
            return false;
        }
        if(size === undefined) {
            alert("Bạn chưa chọn size");
            return false;
        }

        return true;
    }

    const addToCart = () => {
        if(check() === true){
            console.log(color,size,quantity);
        }
    }

    const goToCart = () =>{
        return props.history.push("/cart");
    }

    return (
        <div className="product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="product__image">
                            <div className="row">
                                <div className="col-md-3 col-3">
                                    <div className="product__image__list">
                                        <div className="product__image__list__item">
                                            <img
                                                src={product.img1}
                                                alt={product.img1}
                                                onClick={() =>
                                                    setImgPreview(product.img1)
                                                }
                                            />
                                        </div>
                                        <div className="product__image__list__item">
                                            <img
                                                src={product.img2}
                                                alt={product.img2}
                                                onClick={() =>
                                                    setImgPreview(product.img2)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9 col-9">
                                    <div className="product__image__main">
                                        <img
                                            src={imgPreview}
                                            alt={imgPreview}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`product__description ${toggleExpand ? `expand` : ``}`}>
                            <div className="product__description__title">
                                Chi tiết sản phẩm
                            </div>
                            <div className="product__description__content">
                            {product.description}
                                    
                            </div>
                            <div className="product__description-toggle" onClick={() => setToggleExpand(!toggleExpand)}>
                                {toggleExpand ? `Thu Gọn` : `Xem Thêm`}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="product__content">
                            <div className="name">{product.name}</div>
                            <div className="price">${price}</div>
                            <div className="color">
                                <div className="color__title">Màu sắc</div>
                                <div className="color__list">
                                    {product.color.map((item,i) => (
                                        <div
                                        key={i}
                                            className={`color__list__item ${
                                                item === color ? `active` : ``
                                            }`}
                                            onClick={() => setColor(item)}
                                        >
                                            <div
                                                className={`rectangle bg-${item}`}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="size">
                                <div className="size__title">Kích thước</div>
                                <div className="color__list">
                                    {product.size.map((item,i) => (
                                        <div
                                        key={i}
                                            className={`size__list__item ${
                                                item === size ? `active` : ""
                                            }`}
                                            onClick={() => setSize(item)}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="quantity">
                                <div className="quantity__title">Số lượng</div>
                                <div className="quantity__body">
                                    <div className="quantity__body__minus" onClick={() => handleQuantity("minus")}>
                                        <i className="bx bx-minus"></i>
                                    </div>
                                    <div className="quantity__body__input">
                                        {quantity}
                                    </div>
                                    <div className="quantity__body__plus" onClick={() => handleQuantity("plus")}>
                                        <i className="bx bx-plus"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="control">
                                <Button bg="black" className="control__addToCart" onClick={addToCart}>
                                    Thêm Giỏ Hàng
                                </Button>
                                <Button bg="black" className="control__buyNow"  onClick={goToCart}>
                                    Mua Ngay
                                </Button>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-12">
                    <div className={`product__description mobile ${toggleExpand ? `expand` : ``}`}>
                            <div className="product__description__title">
                                Chi tiết sản phẩm
                            </div>
                            <div className="product__description__content">
                            {product.description}
                                    
                            </div>
                            <div className="product__description-toggle" onClick={() => setToggleExpand(!toggleExpand)}>
                                {toggleExpand ? `Thu Gọn` : `Xem Thêm`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductView.propTypes = {
    data: PropTypes.object.isRequired,
};

export default withRouter(ProductView);
