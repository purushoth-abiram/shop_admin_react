import React from 'react'
import { Outlet } from 'react-router-dom';
import "../../assets/scss/app.scss";
import Header from './header';
import Footer from './footer';
import AdminLayout from './adminlayout';

function AppLayout() {

  return (<div>
    <AdminLayout/>
    <div>
      <Outlet />
    </div>
    

  </div>
  )
}

export default AppLayout