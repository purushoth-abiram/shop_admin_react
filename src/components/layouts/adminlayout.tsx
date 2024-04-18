import { useState } from "react";
import { IconContext } from 'react-icons';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebarData';
import { IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import { FaBell, FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function AdminLayout() {
  const [sidebar, setSidebar] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);

  const toggleSubMenu = (index:any, e:any) => {
    e.stopPropagation();
    setIsSubMenuOpen(prevState => !prevState);
    setActiveSubMenuIndex(index);
  };

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar d-flex'>
          <div className="col-2">
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div className="col-10 d-flex align-items-center">
            <div className="col-md-6">
              <FormControl className="bg-light" size="small" fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                <OutlinedInput className="bg-white"
                  label="Search"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" edge="end" type="submit">
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-2 text-center">
              <div className="d-flex justify-content-between px-5">
                <FaBell style={{ fontSize: '20px' }} />
                <FaUser style={{ fontSize: '20px' }} />
              </div>
            </div>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
          {/* <ul className={`nav-menu-items ${isSubMenuOpen ? 'adjusted' : ''}`} onClick={showSidebar}> */}
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                {/* <li key={index} className={`${item.cName} ${isSubMenuOpen && activeSubMenuIndex === index ? 'adjusted' : ''}`}></li>   */}
                  {item.subMenu ? (
                    <>
                      <div className="menu-title d-flex align-items-center" onClick={(e) => toggleSubMenu(index, e)}>
                        {item.icon}
                        <span style={{ marginRight:'2rem' }}>{item.title}</span>
                        {isSubMenuOpen && activeSubMenuIndex === index ? (
                          <IoIosArrowUp /> // If submenu is open, render up arrow
                        ) : (
                          <IoIosArrowDown /> // If submenu is closed, render down arrow
                        )}
                      </div>
                      {/* Render submenu if "Products" is clicked and the submenu is open */}
                      {isSubMenuOpen && activeSubMenuIndex === index && (
                        <ul className="submenu list-unstyled">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subItem.path}>{subItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <div className="menu-title d-flex align-items-center" style={{marginRight:'2rem'}}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default AdminLayout;