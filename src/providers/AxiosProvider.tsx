import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { userSession } from '../services/HelperService';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ROUTES } from '../configs/constants';


function AxiosProvider() {
    const navigate = useNavigate();
    const user: any = userSession(true);
    const [open, setOpen] = useState(false);
    const [_msg, _setMsg] = useState('');




    const updateAccessToken = () => {
        const _userSession = userSession(true);
        if (_userSession?.accessToken) {
            axios.defaults.headers.common['token'] = _userSession.accessToken;
        }
    }
    useEffect(() => {
        const authInterceptor = axios.interceptors.request.use();
        return () => {
            axios.interceptors.request.eject(authInterceptor);
        }
    }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        updateAccessToken();
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 401) {
                console.log(error.response)
                setTimeout(() => {
                    setOpen(true);
                    _setMsg('Invalid user session, Try to login again');
                }, 100);
            } else {
                return Promise.reject(error);
            }
        });
    }, []);

    return (<>
        <Dialog fullWidth maxWidth={"xs"} open={open} onClose={() => { setOpen(false); navigate(ROUTES.home); }} disableEscapeKeyDown={true}>
            <DialogTitle className="text-danger text-center">{_msg}</DialogTitle>
            <DialogActions className="justify-content-center pb-4">
                <Button variant={"contained"} onClick={() => { setOpen(false); navigate(ROUTES.home); }}>Continue with login</Button>
            </DialogActions>
        </Dialog>
    </>);
}

export default AxiosProvider;