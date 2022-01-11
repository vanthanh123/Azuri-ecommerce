import React, { useState, useCallback, useEffect, useRef } from "react";
import { dataProduct } from "../data/products";
import { dataCategory } from "../data/category";
import Checkbox from "../component/Checkbox";
import size from "../data/product-size";
import color from "../data/product-color";
import price from "../data/product-price";
import Button from "../component/Button";
import InfinityList from "../component/InfinityList";


const Catalog = () => {

    const productList = dataProduct.getAllProduct();

    const initialFilter = {
        category: [],
        color: [],
        size: [],
        price: []
    }

    const [filter, setFilter] = useState(initialFilter);
    const [products, setProducts] = useState(productList);

    const selectedFilter = (checked,type,item) => {
        if(checked){
            switch(type){
                case "category":
                    setFilter({...filter,category:[...filter.category,item.category]});
                    break;
                    case "color":
                    setFilter({...filter,color:[...filter.color,item.color]});
                    break;
                    case "size":
                    setFilter({...filter,size:[...filter.size,item.size]});
                    break;
                    case "price":
                        setFilter({...filter,price:[...filter.price,item.price]});
                        break;
                default:
                    return filter;    
            }
        }else{
            switch(type){
                case "category":
                    const newCategory = filter.category.filter(e => e !== item.category);
                    setFilter({...filter, category: newCategory});
                    break;
                    case "color":
                    const newColor = filter.color.filter(e => e !== item.color);
                    setFilter({...filter, color: newColor});
                    break;
                    case "size":
                    const newSize = filter.size.filter(e => e !== item.size);
                    setFilter({...filter, size: newSize});
                    break;
                    case "price":
                    const newPrice = filter.price.filter(e => e !== item.price);
                    setFilter({...filter, price: newPrice});
                    break;
                default:
                    return filter;
            }
        }
    }

    const updateProducts = useCallback(
        () => {
            let temp = productList;

            if(filter.category.length > 0){
                temp = temp.filter(e => filter.category.includes(e.category));
            }

            if(filter.color.length > 0){
                temp = temp.filter((e) => {
                    const check = e.color.find(color => filter.color.includes(color));
                    return check !== undefined;
                });
            }

            if(filter.size.length > 0){
                temp = temp.filter((e) => {
                    const check = e.size.find(size => filter.size.includes(size));
                    return check !== undefined;
                });
            }

            if(filter.price.length > 0){
                temp = temp.filter((e) => {
                    const priceDifference = 100;
                    const currentPrice = e.sale ? (e.price * (100 - e.sale) / 100).toFixed(2) : e.price;
                    const max = Math.max.apply(Math, filter.price);
                    let min;
                    if(filter.price.length === 1){
                        min = max - priceDifference;
                    }else{
                        min = Math.min.apply(Math, filter.price) - priceDifference;
                    }
                    return currentPrice < max && currentPrice > min;
                });
            }
            setProducts(temp);
        },
        [filter,productList],
    )

    useEffect(() => {
      updateProducts();
    }, [updateProducts])

    const clearFilter = () => setFilter(initialFilter);

    const filterRef = useRef(null);

    const hideShowFilter = () => {
        filterRef.current.classList.toggle('active');
    }

    return (
        
        <div className="catalog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-3 col-12">
                    <div className="catalog__showFilter">
                        <Button bg="black" onClick={() => hideShowFilter()}>Hiện Bộ Lọc</Button>
                    </div>
                        <div className="catalog__filter" ref={filterRef}>
                            <div className="catalog__filter__widget">
                            <div className="catalog__filter__widget__close" onClick={() => hideShowFilter()}>
                                    &#10006;
                            </div>
                                <div className="catalog__filter__widget__header">
                                    Danh mục sản phẩm
                                </div>
                                
                                <div className="catalog__filter__widget__body">
                                    {dataCategory.map((item, i) => (
                                        <div
                                            key={i}
                                            className="catalog__filter__widget__body__item"
                                        >
                                            <Checkbox
                                                onChange={(input) =>
                                                    selectedFilter(
                                                        input.checked,
                                                        "category",
                                                        item
                                                    )
                                                }
                                                checked={filter.category.includes(item.category)}
                                                label={item.display}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="catalog__filter__widget">
                                <div className="catalog__filter__widget__header">
                                    Màu sắc
                                </div>
                                <div className="catalog__filter__widget__body">
                                    {color.map((item, i) => (
                                        <div
                                            key={i}
                                            className="catalog__filter__widget__body__item"
                                        >
                                            <Checkbox
                                                onChange={(input) =>
                                                    selectedFilter(
                                                        input.checked,
                                                        "color",
                                                        item
                                                    )
                                                }
                                                checked={filter.color.includes(item.color)}
                                                label={item.display}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="catalog__filter__widget">
                                <div className="catalog__filter__widget__header">
                                    Kích cỡ
                                </div>
                                <div className="catalog__filter__widget__body">
                                    {size.map((item, i) => (
                                        <div
                                            key={i}
                                            className="catalog__filter__widget__body__item"
                                        >
                                            <Checkbox
                                                onChange={(input) =>
                                                    selectedFilter(
                                                        input.checked,
                                                        "size",
                                                        item
                                                    )
                                                }
                                                checked={filter.size.includes(item.size)}
                                                label={item.display}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="catalog__filter__widget">
                                <div className="catalog__filter__widget__header">
                                    Mức giá
                                </div>
                                <div className="catalog__filter__widget__body">
                                    {price.map((item, i) => (
                                        <div
                                            key={i}
                                            className="catalog__filter__widget__body__item"
                                        >
                                            <Checkbox
                                                onChange={(input) =>
                                                    selectedFilter(
                                                        input.checked,
                                                        "price",
                                                        item
                                                    )
                                                }
                                                checked={filter.price.includes(item.price)}
                                                label={item.display}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="catalog__filter__button">
                                <Button onClick={clearFilter} bg="black">Xóa bộ lọc</Button>
                            </div>
                        </div>
                    </div>
                    <div className=" offset-lg-1 col-lg-6  col-sm-8 col-12">
                        <div className="catalog__content">
                            <InfinityList data={products} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
