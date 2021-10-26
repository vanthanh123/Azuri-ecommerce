const img_slide1 = require('../assets/images/slide1.jpg').default;
const img_slide2 = require('../assets/images/slide2.jpg').default;
const img_slide3 = require('../assets/images/slide3.jpg').default;

const img_category1 = require('../assets/images/banner1.jpg').default;
const img_category2 = require('../assets/images/banner2.jpg').default;
const img_category3 = require('../assets/images/banner3.jpg').default;

const img_product1a = require('../assets/images/product1a.jpg').default;
const img_product1b = require('../assets/images/product1b.jpg').default;
const img_product2a = require('../assets/images/product2a.jpg').default;
const img_product2b = require('../assets/images/product2b.jpg').default;
const img_product3a = require('../assets/images/product3a.jpg').default;
const img_product3b = require('../assets/images/product3b.jpg').default;
const img_product4a = require('../assets/images/product4a.jpg').default;
const img_product4b = require('../assets/images/product4b.jpg').default;
const img_product5a = require('../assets/images/product5a.jpg').default;
const img_product5b = require('../assets/images/product5b.jpg').default;
const img_product6a = require('../assets/images/product6a.jpg').default;
const img_product6b = require('../assets/images/product6b.jpg').default;
const img_product7a = require('../assets/images/product7a.jpg').default;
const img_product7b = require('../assets/images/product7b.jpg').default;
const img_product8a = require('../assets/images/product8a.jpg').default;
const img_product8b = require('../assets/images/product8b.jpg').default;
const img_product9a = require('../assets/images/product9a.jpg').default;
const img_product9b = require('../assets/images/product9b.jpg').default;

const img_testimonial1 = require('../assets/images/avt1.jpg').default;
const img_testimonial2 = require('../assets/images/avt2.jpg').default;
const img_testimonial3 = require('../assets/images/avt3.jpg').default;

const img_logoBrand1 = require('../assets/images/logo_brand1.png').default;
const img_logoBrand2 = require('../assets/images/logo_brand2.png').default;
const img_logoBrand3 = require('../assets/images/logo_brand3.png').default;
const img_logoBrand4 = require('../assets/images/logo_brand4.png').default;
const img_logoBrand5 = require('../assets/images/logo_brand5.png').default;
const img_logoBrand6 = require('../assets/images/logo_brand6.png').default;
const img_logoBrand7 = require('../assets/images/logo_brand7.png').default;

export const dataSlider = [
    {
        title: "COLLECTIONS 2020",
        img: img_slide1
    },
    {
        title: "SUPPER VIP 2021",
        img: img_slide2
    },
    {
        title: "SUPPER VIP 2021",
        img: img_slide3
    }
];

export const dataCategory = [
    {
        title: "MEN'S",
        img: img_category1,
    },
    {
        title: "WOMEN'S",
        img: img_category2,
    },
    {
        title: "ACCESSORIES",
        img: img_category3,
    }
]

const products = [
    {
        name: "Amelia Jumper in Sand",
        price: 205.34,
        img1: img_product1a,
        img2: img_product1b,
        new: true,
        sale: 25,
        slug: "Amelia-Jumper-in-Sand",
        category: "men"
    },
    {
        name: "Soft & Rugged Flannel",
        price: 371.09,
        sale: 56,
        img1: img_product2a,
        img2: img_product2b,
        slug: "Soft-&-Rugged-Flannel",
        category: "men"
    },
    {
        name: "Raglan Crew Neck Sweater",
        price: 259.77,
        img1: img_product3a,
        img2: img_product3b,
        slug: "Raglan-Crew-Neck-Sweater",
        category: "men"
    },
    {
        name: "Our Best Baja Sweater",
        price: 166.99,
        img1: img_product4a,
        img2: img_product4b,
        slug: "Our-Best-Baja-Sweater",
        category: "women"
    },
    {
        name: "Ombre Baja Hoodie",
        price: 371.09,
        sale: 66,
        img1: img_product5a,
        img2: img_product5b,
        slug: "Ombre-Baja-Hoodie",
        category: "women"
    },
    {
        name: "Fleece Graphic Hoodie",
        price: 371.09,
        sale: 33,
        img1: img_product6a,
        img2: img_product6b,
        slug: "Fleece-Graphic-Hoodie",
        category: "women"
    },
    {
        name: "Donegal Crew Neck Sweater",
        price: 247.40,
        sale: 35,
        img1: img_product7a,
        img2: img_product7b,
        slug: "Donegal-Crew-Neck-Sweater",
        category: "women"
    },
    {
        name: "Colorblock Mock Neck",
        price: 290.69,
        img1: img_product8a,
        img2: img_product8b,
        new: true,
        slug: "Colorblock-Mock-Neck",
        category: "men"
    },
    {
        name: "Active Fleece Zip-Up",
        price: 371.09,
        sale: 66,
        img1: img_product9a,
        img2: img_product9b,
        new: true,
        slug: "Active-Fleece-Zip-Up",
        category: "women"
    },
 
]

export const dataTestimonial = [
    {
        name: "David Nguyen",
        content: "“ It's easy to impress me. I don't need a fancy party to be happy. Just good friends, good food, and good laughs. I'm happy. I'm satisfied. I'm content.”",
        job: "Designer",
        img: img_testimonial1
    },
    {
        name: "Jenda",
        content: "“ It's easy to impress me. I don't need a fancy party to be happy. Just good friends, good food, and good laughs. I'm happy. I'm satisfied. I'm content.”",
        job: "Designer",
        img: img_testimonial2
    },
    {
        name: "Sarapova",
        content: "“ It's easy to impress me. I don't need a fancy party to be happy. Just good friends, good food, and good laughs. I'm happy. I'm satisfied. I'm content.”",
        job: "Designer",
        img: img_testimonial3
    },
]

const getAllProduct = () => products;

const getProduct = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min));
    return products.slice(start,start+count);
}

export const dataProduct = {
    getAllProduct,
    getProduct
}

export const dataLogoBrand = [
    {
        img: img_logoBrand1
    },
    {
        img: img_logoBrand2
    },
    {
        img: img_logoBrand3
    },
    {
        img: img_logoBrand4
    },
    {
        img: img_logoBrand5
    },
    {
        img: img_logoBrand6
    },
    {
        img: img_logoBrand7
    },
]


