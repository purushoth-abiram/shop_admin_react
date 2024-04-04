import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaBoxOpen } from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import { MdDashboard } from "react-icons/md";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdDashboard />,
    cName: 'nav-text'
  },
  
  {
    title: 'Products',
    icon: <FaBoxOpen />,
    cName: 'nav-text',
    subMenu: [
      {
        title: 'Add Product',
        path: '/Products/addproduct',
        cName: 'nav-text-sub'
      },
      {
        title: 'Product List',
        path: '/Products/productlist',
        cName: 'nav-text-sub'
      },
      {
        title: 'Categories',
        path: '/Products/categories',
        cName: 'nav-text-sub'
      },
      {
        title: 'Brands',
        path: '/Products/brands',
        cName: 'nav-text-sub'
      },
    ]
  },
  {
    title: 'Orders',
    path: '/order',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];