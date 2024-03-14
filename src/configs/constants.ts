const baseRoute = '/';
export let baseApi = 'https://localhost:7017/api/';
export let RedirectBaseApi = 'https://devsite.familyhivez.com';
if (process.env.NODE_ENV === "production") {
    baseApi = "https://localhost:7017/api/";

}

export const ROUTES = {
    home                            : baseRoute,

    auth:{
      home :                   baseRoute,
    },

    api:{
        adminLogin      : baseApi + 'AdminLogin/GetAdminLoginDetails',
    },
     
};