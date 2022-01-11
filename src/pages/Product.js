import React from "react";
import { useEffect } from "react";
import { dataProduct } from "../data/products";
import ProductView from "../component/ProductView";
import ProductCard from "../component/ProductCard";
import Section, { SectionTitle, SectionBody } from "../component/Section";

const Product = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const product = dataProduct.getProductBySlug(props.match.params.slug)

    return (
        <>
        <div className="productView">
            <div className="container">
            <ProductView data={product}></ProductView>
            </div>
        </div>
            <div className="productRelease">
                <div className="container">
                    <Section>
                        <SectionTitle>SẢN PHẨM LIÊN QUAN</SectionTitle>
                        <SectionBody>
                            
                                <div className="row">
                                    {dataProduct
                                        .getProduct(8)
                                        .map((data, i) => (
                                            <div
                                                key={i}
                                                className="col-lg-3 col-md-4 col-6"
                                            >
                                                <ProductCard data={data} />
                                            </div>
                                        ))}
                                </div>
                            
                        </SectionBody>
                    </Section>
                </div>
            </div>
        </>
    );
};

export default Product;
