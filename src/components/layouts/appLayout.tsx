import React from 'react'
import { Outlet } from 'react-router-dom';
import "../../assets/scss/app.scss";
import Header from './header';
import Footer from './footer';

function AppLayout() {

  return (<div>
    <Header />
    <div>
      <Outlet />
    </div>
    <Footer />

  </div>
  )
}

export default AppLayout