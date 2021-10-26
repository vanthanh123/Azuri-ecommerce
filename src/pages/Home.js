import React from "react";
import Slides from "../component/Slides";
import { dataSlider, dataCategory, dataProduct,dataTestimonial,dataLogoBrand } from "../data/data";
import Category from "../component/Category";
import ProductCard from "../component/ProductCard";
import Section, { SectionTitle, SectionBody } from "../component/Section";
import Testimonial from "../component/Testimonial";
import LogoBrand from "../component/LogoBrand";


const Home = () => {
    return (
        <>
            <Slides data={dataSlider} dot={true} automatic={true} />
            <Category data={dataCategory} />
            <Section>
                <SectionTitle>SẢN PHẨM MỚI</SectionTitle>
                <SectionBody>
                    <div className="container">
                        <div className="row">
                            {dataProduct.getProduct(8).map((data, i) => (
                                <div key={i} className="col-lg-3 col-md-4 col-6">
                                    <ProductCard data={data} />
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>SẢN PHẨM NỔI BẬT</SectionTitle>
                <SectionBody>
                    <div className="container">
                        <div className="row">
                            {dataProduct.getProduct(4).map((data, i) => (
                                <div key={i} className="col-lg-3 col-md-4 col-6">
                                    <ProductCard data={data} />
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionBody>
            </Section>
            <Testimonial data={dataTestimonial} />
            <LogoBrand data={dataLogoBrand} />
        </>
    );
};

export default Home;
