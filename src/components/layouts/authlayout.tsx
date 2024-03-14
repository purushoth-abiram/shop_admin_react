import React from 'react'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { Container } from '@mui/material'
import Agile_Logo from "../../assets/images/Logo.png";
 
export default function AuthLayout() {
    return (<React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" disableGutters>
            <div className="bgAuthLogin row justify-content-center align-items-center px-2 vh-100 g-0">
                <div className="col-md-4 p-3 containerHeight card border-0 rounded--1">
                    <div className="text-center mt-3 ">
                        <img className="authLogo" src={Agile_Logo} alt="Logo" draggable={false} height={64} />
                    </div>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </Container >
    </React.Fragment >
    )
}
