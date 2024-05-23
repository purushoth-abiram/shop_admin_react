import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { insertCategory } from '../../models/model';
import Swal from 'sweetalert2';



function Categories() {

    const [showCreateForm, setShowCreateForm] = useState(false);
    const [_formData, _setFormData] = useState<any>({
        categoryName:""
    });
    
    const handleCreateClick = () =>{
        setShowCreateForm(true);
    }

    const changeFormData = (name: string, value: any) => {
        debugger;
        _setFormData({ ..._formData, [name]: value });
      };

    const saveDetails = () => {
        debugger;
        insertCategory(_formData.categoryName).then((response: any) => {
            debugger;
          if (response.data.status === true) {
                Swal.fire({
                title: 'Success!',
                text: 'Category Added successfully',
                icon: 'success',
                confirmButtonText: 'OK',
                });
                _setFormData({
                ..._formData,
                categoryName:""
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
                <TableCell className="fw-bold" align="center">
                    <input type="checkbox" />
                </TableCell>
                <TableCell className="fw-bold" align="center">Sr.No.</TableCell>
                <TableCell className="fw-bold" align="center">Name</TableCell>
                <TableCell className="fw-bold" align="center">Products</TableCell>
                <TableCell className="fw-bold" align="center">Last Actioned By</TableCell>
                <TableCell className="fw-bold" align="center">Last Actioned Date & Time</TableCell>
                <TableCell className="fw-bold" align="center">Action</TableCell>
            </TableRow>
        </TableHead>
        {/* <TableBody>
            {_list.length > 0 && _list.map((item: any, index: number) =>
                item.specification ? (
                    <TableRow key={index}>
                        <TableCell align="center">{(index + 1) + ((_page - 1) * 10)}</TableCell>
                        <TableCell align="center">{item.subServiceName}</TableCell>
                        <TableCell align="center">{item.productName}</TableCell>
                        <TableCell align="center">
                            {item.specification.map((itemChild: any) =>
                                <span>{itemChild.specificationName}<br /></span>
                            )}
                        </TableCell>
                        <TableCell align="center">{item.displayName}</TableCell>
                        <TableCell align="center">
                            {CalcTimeZone(item?.specification[0]?.updatedat || item?.specification[0]?.createdAt)}
                        </TableCell>
                        <TableCell align="center">
                            <Button variant={"text"} type={"button"} className="text-dark d-flex align-items-center" onClick={e => viewForm(e, item?.masterProductId, item)}>
                                <EditIcon width={15} height={15} /><span className="ms-2">Edit</span>
                            </Button>
                        </TableCell>
                    </TableRow>
                ) : (<></>)
            )}
        </TableBody> */}
    </Table>
</TableContainer>
    )}
{showCreateForm && (
        <div><h4>CREATE NEW CATEGORY</h4>
        <div className="form-container row d-flex justify-content-center">
          <form className='col-md-6'>
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label fw-bold">Name</label>
              <input type="text" className="form-control" id="categoryName" value={_formData.categoryName} onChange={(e) => changeFormData("categoryName", e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={saveDetails}>Save</button>
          </form>
        </div>
        </div>
      )}
</>)
}

export default Categories