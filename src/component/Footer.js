import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer__inner">
                            <div className="footer__header">
                                <Link to="/about">
                                    <h2>Thông tin</h2>
                                </Link>
                            </div>
                            <div className="footer__content">
                                <ul>
                                    <li>Về chúng tôi</li>
                                    <li>Thông tin giao hàng</li>
                                    <li>Chính sách bảo mật</li>
                                    <li>Điều khoản và điều kiện</li>
                                    <li>Liên hệ chúng tôi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer__inner">
                            <div className="footer__header">
                                <Link to="/about">
                                    <h2>Liên kết hữu ích</h2>
                                </Link>
                            </div>
                            <div className="footer__content">
                                <ul>
                                    <li>Tài khoản của tôi</li>
                                    <li>Lịch sử đơn hàng</li>
                                    <li>Lợi Nhuận</li>
                                    <li>Quên mật khẩu</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer__inner">
                            <div className="footer__header">
                                <Link to="/contact">
                                    <h2>Liên hệ chúng tôi</h2>
                                </Link>
                            </div>
                            <div className="footer__content">
                                <ul>
                                    <li>Thủ đức, Hồ Chí Minh</li>
                                    <li>Phone: 0339778775</li>
                                    <li>Mail: thanh98.tdc@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer__inner">
                            <div className="footer__header">
                                <Link to="/contact">
                                    <h2>Bản Tin</h2>
                                </Link>
                            </div>
                            <div className="footer__content">
                                <h2>Theo dõi chúng tôi</h2>
                                <div className="social-icon">
                                <i className='bx bxl-facebook' ></i>
                                <i className='bx bxl-twitter' ></i>
                                <i className='bx bxl-dribbble' ></i>
                                <i className='bx bxl-linkedin' ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>
                    &copy; 2021 Azuri Themes by <span>Van Thanh</span>. All
                    Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
