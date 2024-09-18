import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { IconButton, TextField } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { insertSignUpRegistration } from "../../models/model";



function Signup(){
    const [_formData, _setFormData] = useState<any>({
        Name: '',
        Email: '',
        MobileNumber: '',
        Password: '',
    });
    const validate: any = {
        Name: {error: false, message: ''},
        Email: { error: false, message: '' },
        MobileNumber: { error: false, message: '' },
        Password: { error: false, message: '' }
    }
    const [_validate, _setValidate] = useState<any>(validate);
    const [_showPassword, _setShowPassword] = useState<any>(false);
    const [_loading, _setLoading] = useState<any>(false);

    // maintain form data on change
    const changeFormData = (key: string, value: any) => {
        _setFormData({ ..._formData, [key]: value })
    }

    const saveDetails = () => {
        debugger;
        const data = {
            UserName: _formData?.Name,
            EmailId: _formData?.Email,
            MobileNumber: _formData?.MobileNumber,
            Password: _formData?.Password,
          }
        //console.log("Saving details for signUp:", UserName);
        insertSignUpRegistration(data).then((response: any) => {
            debugger;
          console.log("Response from API:", response);  
          if (response.data.status === true) {
                Swal.fire({
                title: 'Success!',
                text: 'Registration Successfull',
                icon: 'success',
                confirmButtonText: 'OK',
                });
            } 
          else {
                Swal.fire({
                    title: 'Registration Failed',
                    text: response.data.message || 'An error occurred during registration. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.log("Bad Request", response.data.errorDetails || response)
            }  
        })
    }
return(<>
    <form className='p-4 rounded--1'
         //onSubmit={onLoginHandle}
         >
            <div className="px-3">
                <div className="row mt-4">
                    <div className='text-primary my-3 fw-bold'>SignUp</div> 
                    <div className="mt-2">
                        <TextField variant="standard" label="Name" fullWidth value={_formData.Name} onChange={(e: any) => changeFormData('Name', e.target.value)}
                           error={_validate.Name.error} helperText={_validate.Name.message} />
                    </div>
                </div>
            </div>    
            <div className="px-3">
                <div className="row mt-4">
                    <div className="mt-2">
                        <TextField variant="standard" label="Email" fullWidth value={_formData.Email} onChange={(e: any) => changeFormData('Email', e.target.value)}
                           error={_validate.Email.error} helperText={_validate.Email.message} />
                    </div>
                </div>
            </div>
            <div className="px-3">
                <div className="row mt-4">
                    <div className="mt-2">
                        <TextField variant="standard" label="Mobile" fullWidth value={_formData.MobileNumber} onChange={(e: any) => changeFormData('MobileNumber', e.target.value)}
                           error={_validate.MobileNumber.error} helperText={_validate.MobileNumber.message} />
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
                <LoadingButton type="submit" className="col-md-4 col-6 bg-primary btn btn-block px-4 text-white textTransformNone rounded" endIcon={<></>} variant="contained" loadingPosition="end" loading={_loading} onClick={saveDetails}>SignUp</LoadingButton>
            </div>
            <div className='mt-4 d-flex justify-content-end px-3'>
                <Link to="/">Already have an account? Login</Link>
            </div>
    </form>
    </>)
}

export default Signup