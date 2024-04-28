import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrum from '../../../Breadcrum'
import Sidebar from '../Sidebar'
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTestimonial, getTestimonial } from "../../../../store/ActionCreators/TestimonialActionCreators"

export default function Testimonial() {
  let [data, setData] = useState([])
  let dispatch = useDispatch()
  let TestimonialStateData = useSelector(state => state.TestimonialStateData)
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'pic',
      headerName: 'pic',
      width: 70,
      editable: false,
      renderCell:({row})=><a href={`/img/${row.pic}`} target='_blank' rel='noreferrer'>
          <img src={`/img/${row.pic}`} height={50} width={50} /></a>
    },
    {
      field: 'star',
      headerName: 'Star',
      width: 50,
      editable: true,
    },
    {
      field: 'message',
      headerName: 'Message',
      width: 250,
      editable: true,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 70,
      sortable: false,
      renderCell: ({ row }) => <Link to={`/admin/testimonial/update/${row.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link>
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 70,
      sortable: false,
      renderCell: ({ row }) => <button className='btn btn-danger' onClick={() => deleteRecord(row.id)}><i className='fa fa-trash'></i></button>
    },
  ];

  function deleteRecord(Id) {
    if (window.confirm("Are You Sure to Delete that Item:")) {
      dispatch(deleteTestimonial({id:Id }))
      getAPIData()
    }
  }

  function getAPIData() {
    dispatch(getTestimonial())
    if (TestimonialStateData.length)
      setData(TestimonialStateData)
  }
  useEffect(() => {
    getAPIData()
  }, [TestimonialStateData.length])

  return (
    <>
      <Breadcrum title="admin" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <h5 className='bg-primary text-light text-center p-2'>Testimonial<Link to="/admin/testimonial/create" className='float-end text-light'><i className='fa fa-plus'></i></Link></h5>
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
                      <td><Link to={`/admin/testimonial/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
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