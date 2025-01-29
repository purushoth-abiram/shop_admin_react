import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { insertCategory, getCategory } from '../../models/model';
import Swal from 'sweetalert2';



function Categories() {

    const [showCreateForm, setShowCreateForm] = useState(false);
    const [categoryId, setCategoryId] = useState(0);
    const [categoryName, _setCategoryName] = useState<any>();
    const [Categorylist, setCategorylist] = useState<any>({});
    const handleCategoryNameChange = (event: any) => { _setCategoryName(event.target.value); };

    const handleCreateClick = () => {
        setShowCreateForm(true);
    }
    const GetCategories = () => {
        getCategory(categoryId).then((response => {
            debugger;
            if (response?.data?.status === true) {
                setCategorylist(response?.data?.data);
                console.log(response?.data?.data);
            }
        }))
    }
    useEffect(() => {
        GetCategories();
    }, [])
    const saveDetails = () => {
        debugger;
        console.log("Saving details for category:", categoryName);
        insertCategory(categoryName).then((response: any) => {
            debugger;
            console.log("Response from API:", response);
            if (response.data.status === true) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Category Added successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            }
            else {
                console.log("Bad Request")
            }
        })
    }

    return (<>
        <div className="d-flex justify-content-between p-5 align-items-center">
            <h2>CATEGORIES</h2>
            <div>
                <button type="button" className="btn btn-outline-primary mx-3" onClick={handleCreateClick}><i className="bi bi-plus"></i> Create New</button>
                <button type="button" className="btn btn-outline-primary"><i className="bi bi-funnel"></i>Filter</button>
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
                    <TableBody>
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
                    </TableBody>
                </Table>
            </TableContainer>
        )}
        {showCreateForm && (
            <div><h4>CREATE NEW CATEGORY</h4>
                <div className="form-container row d-flex justify-content-center">
                    <form className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="categoryName" className="form-label fw-bold">Name</label>
                            <input type="text" className="form-control" id="categoryName" value={categoryName} onChange={handleCategoryNameChange} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={saveDetails}>Save</button>
                    </form>
                </div>
            </div>
        )}
    </>)
}

export default Categories