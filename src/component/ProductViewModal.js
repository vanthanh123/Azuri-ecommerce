import React from 'react'
import PropTypes from 'prop-types'
import ProductView from './ProductView'
import {dataProduct} from '../data/products'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { remove } from "../redux/productViewModal/productModalSlice";

const ProductViewModal = props => {
    const dispatch = useDispatch(null);
    const productSlug = useSelector((state) => state.productModal.value);
    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        setProduct(dataProduct.getProductBySlug(productSlug));
    }, [productSlug]);

    return (
        <div className={`productView__modal ${productSlug ? `active` : ``}`}>
            <div className="productView__modal__content">
                <ProductView data={product} />
                <div className="productView__modal__content__close">
                    <Button onClick={() => dispatch(remove())} size="sm" bg="black">Đóng</Button>
                </div>
            </div>
        </div>
    )
}

ProductViewModal.propTypes = {
    data: PropTypes.object
}

export default ProductViewModal
