import * as React from "react";
import { httpDelete, httpGet, httpPost, httpPut } from "../services/HttpService";
import { ROUTES } from "../configs/constants";


// Write API's functions below

// Guest Login OTP
export const insertAdminLogin = (Email: any, Password: any) => {
    return httpGet(ROUTES.api.adminLogin + "?Email=" + Email + "&Password=" + Password);
};

export const insertCategory = (categoryName: any) => {
    return httpPost(ROUTES.api.categoryInsert + "?categoryName=" + categoryName);
};