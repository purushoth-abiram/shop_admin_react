import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { userSession } from '../../services/HelperService';
import { getLocalStorage, insertUpdateLocalStorage } from '../../services/AuthService';
import { insertAdminLogin } from '../../models/model';
import Swal from 'sweetalert2'; 
 
 
 
export default function Index() {
    const navigate = useNavigate();
    const [_formData, _setFormData] = useState<any>({
        Email: '',
        Password: '',
    });
 
    const validate: any = {
        Email: { error: false, message: '' },
        Password: { error: false, message: '' }
    }
    const [_validate, _setValidate] = useState<any>(validate);
    const [_snackMessage, _setSnackMessage] = useState('');
    const [_loading, _setLoading] = useState<any>(false);
    const [_showPassword, _setShowPassword] = useState<any>(false);
    const [_loginKey, _setLoginKey] = useState<any>('');
 
    // maintain form data on change
    const changeFormData = (key: string, value: any) => {
        _setFormData({ ..._formData, [key]: value })
    }
 
    // click on next this function call and check validation
    const checkValidation = () => {
        debugger;
        let valid = false;
        let validation = Object.assign({}, validate);
        if (!_formData?.Email) {
            validation.Email.error = true;
            validation.Email.message = 'Required field';
            valid = true;
        }
 
        if (!_formData?.Password) {
            validation.Password.error = true;
            validation.Password.message = 'Required field';
            valid = true;
        }
 
        _setValidate(validation);
        return valid;
    }
 
    const onLoginHandle = (e: any) => {
        e.preventDefault();
        _setLoading(true);
        _setSnackMessage('');
        let validation = Object.assign({}, validate);
        if (checkValidation()) {
            _setLoading(false);
            return;
        }
        const data = {
            LoginEmail: _formData.Email,
            LoginPassword: _formData.Password,
        };
        console.log(data)
        debugger;
        insertAdminLogin(_formData.Email, _formData.Password)
            .then((response) => {
                debugger;
                if (response?.data?.status === "Success") {
                    Swal.fire({
                        text: 'Login Successful',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });               
                }
            
            })
            .catch((err) => {
                if(err?.response?.data?.status === "Error") {
                  Swal.fire({
                    text: 'Invalid Email or Password',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                });
                }
            })
            .finally(() => {
                _setLoading(false);
            });
    }
 
 
    return <React.Fragment>
        <form className='p-4 rounded--1'
         //onSubmit={onLoginHandle}
         onSubmit={onLoginHandle}
         >
            <div className="px-3">
                <div className="row mt-4">
                    <div className='text-primary my-3 fw-bold'>Login</div>
 
                    <div className="mt-2">
                        <TextField variant="standard" label="Email" fullWidth value={_formData.Email} onChange={(e: any) => changeFormData('Email', e.target.value)}
                           error={_validate.Email.error} helperText={_validate.Email.message} />
                    </div>
                </div>
            </div>
            <div className="px-3">
                <div className="row mt-4">
                    <div className="mt-2">
                        <TextField variant="standard" onChange={(e: any) => changeFormData('Password', e.target.value)}
                            value={_formData?.Password} label="Password" type={_showPassword ? "text" : "Password"}
                            fullWidth  error={_validate.Password.error} helperText={_validate.Password.message}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => _setShowPassword(!_showPassword)}>
                                        {_showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='mt-4 d-flex justify-content-end px-3'>
                <LoadingButton type="submit" className="col-md-4 col-6 bg-primary btn btn-block px-4 text-white textTransformNone rounded" endIcon={<></>} variant="contained" loadingPosition="end" loading={_loading}>Login</LoadingButton>
            </div>
        </form>
    </React.Fragment>
}