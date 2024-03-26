import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from "../components/layouts/appLayout";
import Authlayout from "../components/layouts/authlayout";
import AuthLogin from "../../src/pages/home";


import { ROUTES } from "../configs/constants";

function RouteApp() {

    const HomePage = lazy(() => import("../pages/home"));
    const DashPage = lazy(() => import("../pages/dashboard/dashboard"));

    return (<>
    <Routes>

    <Route path={ROUTES.home} element={< Authlayout />}>
          <Route
            path={ROUTES.auth.home}
            element={ 
              <Suspense fallback={""}>
                < AuthLogin />
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
          </Route>
    </Routes>
    </>)
}

export default RouteApp;
