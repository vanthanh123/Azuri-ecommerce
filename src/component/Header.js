import React from "react";
import { Link,useLocation } from "react-router-dom";
import { useEffect, useRef} from "react";

import logo from "../assets/images/logo.png";


const navbar = [
    {
        display: "Trang Chủ",
        path: "/",
    },
    {
        display: "Sản phẩm",
        path: "/catalog",
    },
    {
        display: "Bài Viết",
        path: "/blog",
    },
    {
        display: "Liên hệ",
        path: "/contact",
    },
    
];

const Header = () => {

// lấy pathname
const  { pathname } = useLocation();
// kiểm tra xem trang nào đang active
const navActive = navbar.findIndex(e => e.path === pathname);

const headerRef = useRef(null);

//lấy element menu
const menuCenter = useRef(null);

const menuToggle = () => menuCenter.current.classList.toggle("active");


useEffect(() => {
    window.addEventListener("scroll", () =>{
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            headerRef.current.classList.add("shrink");
        }else{
                headerRef.current.classList.remove("shrink");
        }
    })
    return () => {
        window.removeEventListener("scroll");
    };
}, []);

//
    return (
        <>
            <div ref={headerRef} className="header">
                <div className="container">
                    <div className="row">
                        <div className="header__content__left col-md-3 col-sm-6 col-8">
                        <box-icon onClick={menuToggle} class="header__icon__mobile-toggle" name='menu'></box-icon>
                            <div className="header__logo">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div ref={menuCenter} className="header__content__center col-md-6 col-sm-2 col-2 clearfix">
                            <div className="header__nav">
                            <box-icon onClick={menuToggle} class="icon-left" name='left-arrow-alt'></box-icon>
                                <ul>
                                    {navbar.map((item, i) => (
                                        <li onClick={menuToggle} className={navActive === i ? 'active' : ''} key={i}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="header__content__right col-md-3 col-sm-4 col-4">
                            <div className="header__right">
                                <div className="search">
                                    <box-icon name="search-alt-2"></box-icon>
                                </div>
                                <div className="setting">
                                    <box-icon name='cog'></box-icon>
                                </div>
                                <div className="cart">
                                    <span>0</span>
                                    <box-icon name="shopping-bag">
                                    </box-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
