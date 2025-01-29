import { FormControl, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getCategory, insertNewProduct } from '../../models/model';
import { LoadingButton } from '@mui/lab';
import Swal from 'sweetalert2';

function Addproduct() {

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [categoryList, setCategoryList] = useState<any>({});
  const [categoryId, setCategoryId] = useState(0);
  const [_loading, _setLoading] = useState<any>(false);
  const [formData, setFormData ] = useState<any>([{
    name:"",
    category:0,
    description:"",
    picture:"",
    price:0,
  }])

  const handleCreateClick = () => {
    setShowCreateForm(true);
  }


  const changeFormData = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value })
  }

    const saveDetails = () => {
      debugger;
      const data = {
          ProductName: formData?.name,
          CategoryId: formData?.category,
          Desc: formData?.description,
          ProductImage: formData?.picture,
          MRPPrice: parseFloat(formData?.price) || 0,
        }
        debugger;
      insertNewProduct(data).then((response: any) => {
          debugger;
        console.log("Response from API:", response);  
        if (response.data.status === true) {
              Swal.fire({
              title: 'Success!',
              text: 'Product Added Successfully',
              icon: 'success',
              confirmButtonText: 'OK',
              });
          } 
        else {
              Swal.fire({
                  title: 'Failed to save product details',
                  text: response.data.message || 'An error occurred during registration. Please try again.',
                  icon: 'error',
                  confirmButtonText: 'OK',
              });
              console.log("Bad Request", response.data.errorDetails || response)
          }  
      })
    }

  useEffect(() => {
      getCategory(categoryId).then((response: any) => {
        if (response?.data?.status === true) {
            setCategoryList(response?.data?.data);
        }
    });
  }, [categoryId])

  return (<>
    <div className='d-flex justify-content-between p-5 align-items-center'>
      <h2>PRODUCTS</h2>
      <div>
        <button type='button' className='btn btn-outline-primary mx-3' onClick={handleCreateClick}><i className='bi bi-plus'></i>Create New</button>
        <button type='button' className='btn btn-outline-primary'><i className="bi bi-funnel"></i>Filter</button>
      </div>
    </div>
    {!showCreateForm && (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead className="bg-light">
                        <TableRow>
                            <TableCell className="fw-bold" align="center">Sr.No.</TableCell>
                            <TableCell className="fw-bold" align="center">Name</TableCell>
                            <TableCell className="fw-bold" align="center">Products</TableCell>
                            <TableCell className="fw-bold" align="center">Last Actioned By</TableCell>
                            <TableCell className="fw-bold" align="center">Last Actioned Date & Time</TableCell>
                            <TableCell className="fw-bold" align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* <TableBody>
                        {Categorylist.length > 0 && Categorylist.map((item: any, index: number) =>
                        (
                            <TableRow key={index}>
                                <TableCell align="center">{(index + 1)}</TableCell>
                                <TableCell align="center">{item.categoryName}</TableCell>
                                <TableCell align="center">{'-'}</TableCell>
                                <TableCell align="center">{'-'}</TableCell>
                                <TableCell align="center">{'-'}</TableCell>
                                <TableCell align="center">{'-'}</TableCell>
                            </TableRow>
                        )
                        )}
                    </TableBody> */}
                </Table>
            </TableContainer>
        )}
    {showCreateForm &&(
      <div><h4>CREATE NEW PRODUCT</h4>
        <div className='form-container row d-flex justify-content-center'>
          <form className='col-md-6'>
            <div className='mb-3'>
              <label htmlFor="productName" className='form-label fw-bold'>Name</label>
              <input type="text" className="form-control" id="categoryName" value={formData?.name} onChange={(e: any) => changeFormData('name', e.target.value)}/>            
            </div>
            <div className='mb-3'>
              <label htmlFor="categoryName" className='form-label fw-bold'>Category</label>
              <FormControl className='w-100'>
                <Select
                className='form-control p-0'
                value={formData?.category || ""}
                onChange={(e:any)=>changeFormData('category',e.target.value)}
                >
                  {categoryList.length > 0 && categoryList.map((item: any) =>
                      (<MenuItem key={item.categoryName} value={item.id}>{item.categoryName}</MenuItem>))}
                </Select>
              </FormControl>
            </div>
            <div className='mb-3'>
              <label htmlFor="description" className='form-label fw-bold'>Description</label>
              <textarea 
                id="description" 
                className='form-control'  
                style={{ resize: 'both' }}
                placeholder="Enter your description here..."
                value={formData?.description}
                onChange={(e: any) => changeFormData('description', e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="photoupload" className='form-label fw-bold'>Picture</label>
              <input type="file" className="form-control" id="photoupload" accept='image/*'value={formData?.picture} onChange={(e: any) => changeFormData('picture', e.target.value)}/>            
            </div>
            <div className='mb-3'>
              <label htmlFor="price" className='form-label fw-bold'>Price</label>
              <input type="text" className="form-control" id="price" value={formData?.price} onChange={(e: any) => changeFormData('price', e.target.value)}/>            
            </div>
            {/* <button type="submit" className="btn btn-primary">Save</button> */}
            <div className='mt-4 d-flex justify-content-end px-3'>
                <LoadingButton type="submit" className="col-md-4 col-6 bg-primary btn btn-block px-4 text-white textTransformNone rounded" endIcon={<></>} variant="contained" loadingPosition="end" loading={_loading} onClick={saveDetails}>Save</LoadingButton>
            </div>
          </form>
        </div>
      </div>
    )}
    </>)
}

export default Addproduct