import React from 'react'
import {useState} from 'react'
import { dataProduct } from '../data/products'
import {Link} from "react-router-dom"

const Search = props => {
    const [searchActive, setSearchActive] = useState(false);
    const [keyword, setKeyword] = useState("");
    const data = dataProduct.getAllProduct();

    const handleOnChange = (value) => {
        setKeyword(value);
    }

    const handleResult = () => {
        setSearchActive(!searchActive);
        setKeyword("");
    }
    
    return (
        <div className="search">
            <div className={`search__input ${searchActive ? `active` : ``}`}>
                <input type="text" value={keyword} onChange={(e) => handleOnChange(e.target.value)} placeholder="Nhập Tên Sản Phẩm..."/>
                <div className="search__input__close" onClick={() => setSearchActive(false)}>
                    &#10006;
                </div>
            </div>
            <div className="search__icon" onClick={() => setSearchActive(true)}>
                <i className="bx bx-search-alt-2"></i>
            </div>
            <div className="search__result">
                {data.filter((e) => e.name.includes(keyword)).map((item,i) => (
                    <Link to={`/catalog/${item.slug}`} onClick={handleResult}>
                        <div key={i} className="search__result__item m-4">
                            {item.name}
                        </div>
                    </Link>
                   
                ))}
            </div>
        </div>
    )
}

export default Search


