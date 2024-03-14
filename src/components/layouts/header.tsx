import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from "../../assets/images/cart_logo(1).jpg";


function Header() {

    const location = useLocation();

    const isNavLinkActive = (path: string) => location.pathname === path;


    const [expanded, setExpanded] = useState(false);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const dropDownOpen = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: any) => {
        console.log(`Selected option: ${option}`);
        setDropdownOpen(false);
    };



    return (<>
        <React.Fragment>
            <div className="text-center">
                <div className="bg-dark p-2 d-flex justify-content-center align-items-center">
                    <div className="col-md-10 col-12">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <div className="text-light me-2">English</div>
                                <div className="text-light mx-2"> Welcome to Complex Store!</div>
                            </div>
                            <div className="text-light">Account</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_searchArea d-flex justify-content-center align-items-center">
                <div className="col-md-10 py-3">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-3">
                            <img
                                //src="logo"
                                src={Logo}
                                alt="Logo" className="img-fluid" />
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search..."
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary bgPrimary text-white" type="button">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex justify-content-end align-items-center">
                                <ShoppingCartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="header_menuArea bg-light d-flex justify-content-center align-items-center">
                <div className="col-md-10 py-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="bg-light">
                       
                                <Nav className="mr-auto">
                                    <NavLink to="#home" className={isNavLinkActive('#home') ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                                    <NavLink to="#shop" className={isNavLinkActive('#shop') ? 'nav-link active' : 'nav-link'}>Shop</NavLink>
                                    <NavLink to="#about" className={isNavLinkActive('#about') ? 'nav-link active' : 'nav-link'}>About Us</NavLink>
                                    <NavLink to="#contact" className={isNavLinkActive('#contact') ? 'nav-link active' : 'nav-link'}>Contact Us</NavLink>
                                </Nav>
                           
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="header_menuArea d-flex justify-content-start align-items-center">
                <div className="container mt-3">
                    <div className="d-flex justify-content-start align-items-center row">
                        <div className='bgPrimary border p-3 d-flex justify-content-between col-md-3 rounded-top' onClick={dropDownOpen}>
                            <MenuIcon style={{ color: 'white' }} />
                            <div className='text-white'>ALL CATEGORIES
                            {isDropdownOpen === false ?   <KeyboardArrowDownIcon  style={{ color: 'white' }}/> : <KeyboardArrowUpIcon  style={{ color: 'white' }}/> }
                            </div>
                        </div>



                        <div className="d-flex justify-content-center align-items-end col-md-7">
                            <ul className="nav">
                                <li className="nav-item">
                                    <NavLink to="#home" className={isNavLinkActive('#home') ? 'nav-link active' : 'nav-link fs-4'}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="#shop" className={isNavLinkActive('#shop') ? 'nav-link active' : 'nav-link fs-4'}>Shop</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="#about" className={isNavLinkActive('#about') ? 'nav-link active' : 'nav-link fs-4'}>About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="#contact" className={isNavLinkActive('#contact') ? 'nav-link active' : 'nav-link fs-4'}>Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {isDropdownOpen && (   
                <div className="container mx-auto">
                <div className="header_menuArea bg-white position-absolute d-flex justify-content-start align-items-center" style={{zIndex:"999",width:"20%"}}>
                    <div className="py-3">
                        <div className="d-flex justify-content-start align-items-center row">
                            <div className="text-dark">Option 1</div>
                            <div className="text-dark">Option 2</div>
                            <div className="text-dark">Option 3</div>
                        </div>
                    </div>
                </div>
                </div>
            )}

          
        </React.Fragment>
    </>)
}
export default Header;