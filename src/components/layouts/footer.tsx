import React, { CSSProperties } from 'react';
import logo from "../../assets/images/cart_logo(1).jpg";
import mobile from "../../assets/images/social-mobile-header-screen.png";
import laptop from "../../assets/images/Microsoft-Surface-Pro-5-Touchscreen-Laptop-Intel-Core-i5-8GB-RAM-256GB-SSD-Windows-10-Pro-2017-FJY-00001.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import visa from "../../assets/images/visa_card.png";
import master from "../../assets/images/master_card.png";
import paypal from "../../assets/images/paypal_card.png";
import skrill from "../../assets/images/skrill_card.png";
import maestro from "../../assets/images/maestro_card.png";
import electron from "../../assets/images/visaelectron_card.png";
import amazon from "../../assets/images/amazon_card.png";

function Footer() {
    const footerStyle: CSSProperties = {

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: "100vh",
        textAlign: "center",

    };

    return (
        <div style={footerStyle}>
            <div className='footer-widget-top d-flex justify-content-center align-items-center' style={{ backgroundColor: '#b11e22', height: '8em', alignItems: 'center' }}>
                <div className='text-white'>SIGN UP TO <span className='fw-bold fs-4'>NEWSLETTER & FREE SHIPPING</span> FOR FIRST SHOPPING</div>
                <div className="input-group rounded mx-2" style={{ width: '400px', borderRadius: '20px' }}>
                    <input type="search" className="form-control rounded" placeholder="Your email address" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init style={{ backgroundColor: 'black' }}>search</button>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center my-1">
                <div className="col-md-10 py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className='text-start'><img src={logo} alt="cartlogo" /></div>
                            <div className='my-1' style={{ textAlign: 'left' }}><p><strong>Complex</strong> is a premium Templates theme with advanced admin module. It’s extremely customizable.</p></div>
                            <div className='d-flex'><LocationOnIcon className='mt-1' style={{ fontSize: 'medium' }} /><p><strong>Address:</strong> 1234 Street Name, City Name, United States</p></div>
                            <div className='d-flex'><EmailIcon className='mt-1' style={{ fontSize: 'medium' }} /><p><strong>Email:</strong> mail@example.com</p></div>
                        </div>
                        <div className="col-md-2">
                            <div className='fw-bold text-start'>INFORMATION</div>
                            <div>
                                <ul className='list-unstyled text-start mt-4' style={{ lineHeight: '2' }}>
                                    <li><a href='#' className='text-decoration-none text-dark'>About us</a></li>
                                    <li><a href='#' className='text-decoration-none text-dark'>Contact us</a></li>
                                    <li><a href='#' className='text-decoration-none text-dark'>All Collection</a></li>
                                    <li><a href='#' className='text-decoration-none text-dark'>Privacy policy</a></li>
                                    <li><a href='#' className='text-decoration-none text-dark'>Terms & Condition</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className='fw-bold text-start'>CUSTOM LINKS</div>
                            <div>
                                <ul className='list-unstyled text-start mt-4' style={{ lineHeight: '2' }}>
                                    <li><a href='#' className='text-decoration-none text-dark'>My Account</a></li>
                                    <li><a href='#' className='text-decoration-none text-dark'>Checkout</a></li>
                                    <li><a href='#' className='text-decoration-none text-dark'>Cart</a></li>
                                    <li><a href='#' className='text-decoration-none text-dark'>Videos</a></li>
                                    <li><a href='#' className='text-decoration-none text-dark'>WordPress</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='fw-bold text-start'>ON SALE</div>
                            <div className='my-4'>
                                <div className='d-flex'>
                                <div className='border rounded p-2'><img src={mobile} alt="Mob_Logo" style={{ height: '60px', width: '50px' }} /></div>
                                <div>
                                    <a href='#' className='text-decoration-none text-dark mx-2'>New Samsung</a>
                                    <div className='d-flex justify-content-between px-2'><span className='text-decoration-line-through'>$300</span><span style={{color:'#b11e22', fontWeight:'bold'}}>$200</span></div>
                                </div>
                                </div>
                                <div className='d-flex my-2'> 
                                <div className='border rounded p-2'><img src={laptop} alt="Mob_Logo" style={{ height: '60px', width: '50px' }} /></div>
                                <div>
                                    <a href='#' className='text-decoration-none text-dark mx-2'>Lenovo New</a>
                                    <div className='d-flex justify-content-between px-2'><span className='text-decoration-line-through'>$250</span><span style={{color:'#b11e22', fontWeight:'bold'}}>$200</span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <hr className='p-0 m-0' />
                <div className="d-flex justify-content-between align-items-center py-4">
                    <div>Copyright © Lionthemes88 . All Rights Reserved.</div>
                    <div className='d-flex'>
                        <img src={visa} alt="visa" style={{width:'40px', height:'30px'}} className='mx-2 border rounded'/>
                        <img src={master} alt="visa" style={{width:'40px', height:'30px'}} className='mx-2 border rounded'/>
                        <img src={paypal} alt="visa" style={{width:'40px', height:'30px'}} className='mx-2 border rounded'/>
                        <img src={skrill} alt="visa" style={{width:'40px', height:'30px'}} className='mx-2 border rounded'/>
                        <img src={maestro} alt="visa" style={{width:'40px', height:'30px'}} className='mx-2 border rounded'/>
                        <img src={electron} alt="visa" style={{width:'40px', height:'30px'}} className='mx-2 border rounded'/>
                        <img src={amazon} alt="visa" style={{width:'40px', height:'30px'}} className='mx-2 border rounded'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
