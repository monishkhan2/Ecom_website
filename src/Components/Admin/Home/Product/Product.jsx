import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrum from '../../../Breadcrum'
import Sidebar from '../Sidebar'
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

import { deleteProduct, getProduct } from '../../../../store/ActionCreators/ProductActionCreators ';


export default function Product() {
  let [data, setData] = useState([])
  let dispatch = useDispatch()
  let ProductStateData = useSelector(state => state.ProductStateData)
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
     {
      field: 'maincategory',
      headerName: 'Maincategory',
      width: 100,
      editable: true,
    },
    {
      field: 'subcategory',
      headerName: 'Subcategory',
      width: 100,
      editable: true,
    },
    {
      field: 'brand',
      headerName: 'Brand',
      width: 100,
      editable: true,
    },
    {
      field: 'color',
      headerName: 'Color',
      width: 80,
      editable: true,
    },
    {
      field: 'size',
      headerName: 'Size',
      width: 80,
      editable: true,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 100,
      editable: true,
      renderCell:({row})=><span>{row.stock ? "In Stock" : "Out Of Stock"}</span>,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 70,
      editable: true,
    },
    {
      field: 'baseprice',
      headerName: 'Baseprice',
      width: 100,
      editable: true,
      renderCell:({row})=><span>&#8377;{row.baseprice}</span>,
    },
    {
      field: 'discount',
      headerName: 'Discount',
      width: 100,
      editable: true,
      renderCell:({row})=><span>{row.discount}%</span>,
    },
    {
      field: 'finalprice',
      headerName: 'Finalprice',
      width: 100,
      editable: true,
      renderCell:({row})=><span>&#8377;{row.finalprice}</span>,
    },
    {
      field: 'pic',
      headerName: 'pic',
      width: 5000,
      editable: false,
      renderCell:({row})=>{
      return row.pic.map((item,index)=>{
      return <a key={index} href={`/images/${item}`} target='_blank' rel='noreferrer'>
          <img src={`/images/${item}`} height={50} width={50} /></a>
      })
    }
  },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 60,
    sortable: false,
    renderCell: ({ row }) => <Link to={`/admin/product/update/${row.id}`}
     className='btn btn-primary'><i className='fa fa-edit'></i></Link>
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width:60,
    sortable: false,
    renderCell: ({ row }) => <button className='btn btn-danger' onClick={() =>
       deleteRecord(row.id)}><i className='fa fa-trash'></i></button>
  }
  ];

  function deleteRecord(id) {
    if (window.confirm("Are You Sure to Delete that Item:")) {
      dispatch(deleteProduct({id:id }))
      getAPIData()
    }
  }

  function getAPIData() {
    dispatch(getProduct())
    if (ProductStateData.length)
      setData(ProductStateData)
  }
  useEffect(() => {
    getAPIData()
  }, [ProductStateData.length])

  return (
    <>
      <Breadcrum title="admin" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <h5 className='bg-primary text-light text-center p-2'>Product<Link to="/admin/Product/create" className='float-end text-light'><i className='fa fa-plus'></i></Link></h5>
            {/* <table className='table table-borderd'>
                 <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th></th>
                      <th></th>
                    </tr>
                 </thead>
                 <tbody>
                    {
                      data.map((item,index)=>{
                        return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><Link to={`/admin/product/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
                      <td><button className='btn btn-danger' onClick={()=>deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
                    </tr>
                      })
                    }
                    </tbody>
               </table> */}
            <div className="table-responsive">
              <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5, 10, 50, 100]}
                checkboxSelection={false}
                disableRowSelectionOnClick
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}