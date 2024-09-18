import * as React from "react";
import { httpDelete, httpGet, httpPost, httpPut } from "../services/HttpService";
import { ROUTES } from "../configs/constants";


// Write API's functions below

// Guest Login OTP
export const insertAdminLogin = (Email: any, Password: any) => {
    return httpGet(ROUTES.api.adminLogin + "?Email=" + Email + "&Password=" + Password);
};

export const insertSignUpRegistration = (formData:any) => {
    return httpPost(ROUTES.api.signup, formData);
};

export const insertCategory = (categoryName: any) => {
    return httpPost(ROUTES.api.categoryInsert + "?categoryName=" + categoryName);
};
export const getCategory = (categoryId: any) => {
    return httpGet(ROUTES.api.getcategory + "?categoryId=" + categoryId);
};