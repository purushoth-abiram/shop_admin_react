import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from "../components/layouts/appLayout";
import Authlayout from "../components/layouts/authlayout";
import AuthLogin from "../../src/pages/home";


import { ROUTES } from "../configs/constants";

function RouteApp() {

    const HomePage    = lazy(() => import("../pages/home"));
    const Signup      = lazy(() => import("../pages/home/signup"));
    const DashPage    = lazy(() => import("../pages/dashboard/dashboard"));
    const AddProduct  = lazy(() => import("../pages/products/addproduct"));
    const ProductList = lazy(() => import("../pages/products/productlist"));
    const Categories  = lazy(() => import("../pages/products/categories"));
    const Brands      = lazy(() => import("../pages/products/brands")); 
    return (<>
    
    <Routes>
      <Route path={ROUTES.home} element={< Authlayout />}>
            <Route
              path={ROUTES.auth.login}
              element={ 
                <Suspense fallback={""}>
                  < AuthLogin />
                </Suspense>
              }
            />
      </Route>

      <Route path={ROUTES.home} element={< Authlayout />}>
            <Route
              path={ROUTES.auth.signup}
              element={ 
                <Suspense fallback={""}>
                  < Signup />
                </Suspense>
              }
            />
      </Route>

      <Route path={ROUTES.home} element={<AppLayout />}>
            <Route
              path={ROUTES.dashboard}
              element={
                <Suspense fallback={""}>
                  <DashPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.products.addproduct}
              element={
                <Suspense fallback={""}>
                  <AddProduct />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.products.productlist}
              element={
                <Suspense fallback={""}>
                  <ProductList />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.products.categories}
              element={
                <Suspense fallback={""}>
                  <Categories />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.products.brands}
              element={
                <Suspense fallback={""}>
                  <Brands />
                </Suspense>
              }
            />
      </Route>
    </Routes>
    </>)
}

export default RouteApp;
