import signup from "../pages/home/signup";

const baseRoute = '/';
export let baseApi = 'https://localhost:7017/api/';
if (process.env.NODE_ENV === "production") {
    baseApi = "https://localhost:7017/api/";

}

export const ROUTES = {
    home                            : baseRoute ,
    auth:{
      login                         : baseRoute, 
      signup                        : baseRoute + "signup",     
    },
    
    dashboard                       : baseRoute + "dashboard",
    products:{
        addproduct : baseRoute + 'Products/addproduct',
        productlist : baseRoute + 'Products/productlist',
        categories : baseRoute + 'Products/categories',
        brands : baseRoute + 'Products/brands',
    },

    api:{
        adminLogin      : baseApi + 'AdminLogin/GetAdminLoginDetails',
        signup          : baseApi + 'AdminSignUp/PostAdminSignUpDetails',  
        categoryInsert  : baseApi + 'Category/PostAddCategory',
        getcategory  : baseApi + 'Category/GetCategory'
    },
     
};