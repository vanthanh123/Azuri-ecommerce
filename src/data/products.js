const img_product1a = require("../assets/images/product1a.jpg").default;
const img_product1b = require("../assets/images/product1b.jpg").default;
const img_product2a = require("../assets/images/product2a.jpg").default;
const img_product2b = require("../assets/images/product2b.jpg").default;
const img_product3a = require("../assets/images/product3a.jpg").default;
const img_product3b = require("../assets/images/product3b.jpg").default;
const img_product4a = require("../assets/images/product4a.jpg").default;
const img_product4b = require("../assets/images/product4b.jpg").default;
const img_product5a = require("../assets/images/product5a.jpg").default;
const img_product5b = require("../assets/images/product5b.jpg").default;
const img_product6a = require("../assets/images/product6a.jpg").default;
const img_product6b = require("../assets/images/product6b.jpg").default;
const img_product7a = require("../assets/images/product7a.jpg").default;
const img_product7b = require("../assets/images/product7b.jpg").default;
const img_product8a = require("../assets/images/product8a.jpg").default;
const img_product8b = require("../assets/images/product8b.jpg").default;
const img_product9a = require("../assets/images/product9a.jpg").default;
const img_product9b = require("../assets/images/product9b.jpg").default;
const img_product10a = require("../assets/images/product10a.jpg").default;
const img_product10b = require("../assets/images/product10b.jpg").default;
const img_product11a = require("../assets/images/product11a.jpg").default;
const img_product11b = require("../assets/images/product11b.jpg").default;

const products = [
    {
        name: "Amelia Jumper in Sand",
        price: 205.34,
        img1: img_product1a,
        img2: img_product1b,
        new: true,
        sale: 25,
        slug: "Amelia-Jumper-in-Sand",
        category: "men",
        color: [ "black", "pink", "blue", "white"],
        size: ["s", "m", "l"],
        description: "Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales.Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales"
    },
    {
        name: "Soft & Rugged Flannel",
        price: 371.09,
        sale: 56,
        img1: img_product2a,
        img2: img_product2b,
        slug: "Soft-&-Rugged-Flannel",
        category: "men",
        color: ["red", "yellow", "pink", "blue", "white"],
        size: ["s", "m", "xxl"],
        description: "Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales.Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales"

    },
    {
        name: "Raglan Crew Neck Sweater",
        price: 259.77,
        img1: img_product3a,
        img2: img_product3b,
        slug: "Raglan-Crew-Neck-Sweater",
        category: "men",
        color: ["red", "yellow", "blue", "white"],
        size: [ "l", "xl", "xxl"],
        description: "Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales.Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales"

    },
    {
        name: "Our Best Baja Sweater",
        price: 166.99,
        img1: img_product4a,
        img2: img_product4b,
        slug: "Our-Best-Baja-Sweater",
        category: "women",
        color: ["red", "pink", "blue", "white"],
        size: ["s", "m", "l", "xl", "xxl"],
        description: "Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales.Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales"

    },
    {
        name: "Ombre Baja Hoodie",
        price: 371.09,
        sale: 66,
        img1: img_product5a,
        img2: img_product5b,
        slug: "Ombre-Baja-Hoodie",
        category: "women",
        color: ["black", "pink", "blue", "white"],
        size: ["s", "l", "xl", "xxl"],
        description: "Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales.Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales"

    },
    {
        name: "Fleece Graphic Hoodie",
        price: 371.09,
        sale: 33,
        img1: img_product6a,
        img2: img_product6b,
        slug: "Fleece-Graphic-Hoodie",
        category: "accessories",
        color: ["yellow", "black", "pink", "blue", "white"],
        size: [ "l", "xl", "xxl"],
        description: "Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales.Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales"

    },
    {
        name: "Donegal Crew Neck Sweater",
        price: 247.4,
        sale: 35,
        img1: img_product7a,
        img2: img_product7b,
        slug: "Donegal-Crew-Neck-Sweater",
        category: "women",
        color: ["red", "yellow", "black", "pink", "white"],
        size: ["s", "m", "l", "xl", "xxl"],
        description: "Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales.Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales"

    },
    {
        name: "Colorblock Mock Neck",
        price: 290.69,
        img1: img_product8a,
        img2: img_product8b,
        new: true,
        slug: "Colorblock-Mock-Neck",
        category: "men",
        color: ["red", "yellow", "black", "pink", "blue", "white"],
        size: ["s", "m", "l", "xl", "xxl"],
        description: "Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales.Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales"

    },
    {
        name: "Active Fleece Zip-Up",
        price: 371.09,
        sale: 66,
        img1: img_product9a,
        img2: img_product9b,
        new: true,
        slug: "Active-Fleece-Zip-Up",
        category: "women",
        color: ["red","pink","blue","white"],
        size: ["s","m","xxl"],
        description: "Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales.Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales"

    },
    {
        name: "Soft & Rugged Flannel",
        price: 371.09,
        sale: 66,
        img1: img_product10a,
        img2: img_product10b,
        new: true,
        slug: "Soft-&-Rugged-Flannel",
        category: "men",
        color: ["black", "pink", "blue", "white"],
        size: [ "m", "l", "xl", "xxl"],
        description: "Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales.Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales"

    },
    {
        name: "Ellis Pant in Ivory",
        price: 290.69,
        img1: img_product11a,
        img2: img_product11b,
        new: true,
        slug: "Ellis-Pant-in-Ivory",
        category: "women",
        color: ["red", "yellow", "black", "pink", "blue", "white"],
        size: ["s", "m", "l", "xl", "xxl"],
        description: "Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales.Sed risus neque, sagittis sed pellentesque at, pharetra ut nunc. Phasellus id enim eget ante pellentesque pharetra. Phasellus et nisl urna. Integer nisl dui, efficitur in volutpat sodales, tempor sed orci. Donec et euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tincidunt dictum eros at porta. Phasellus gravida dolor in sem placerat sodales"

    },
];

const getAllProduct = () => products;

const getProduct = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min));
    return products.slice(start, start + count);
};

const getProductBySlug = (slug) => products.find(e => e.slug === slug);

const getCartItemDetail = (cartItems) => {
    let res = [];
    if(cartItems.length > 0){
        cartItems.forEach(e => {
            res.push({
                ...e,
                product: getProductBySlug(e.slug)
            })
        })
    }
    return res;
}

export const dataProduct = {
    getAllProduct,
    getProduct,
    getProductBySlug,
    getCartItemDetail,
};

