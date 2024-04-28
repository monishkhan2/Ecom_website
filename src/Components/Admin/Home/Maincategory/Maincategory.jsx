import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrum from '../../../Breadcrum'
import Sidebar from '../Sidebar'
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

import { deleteMaincategory, getMaincategory } from '../../../../store/ActionCreators/MaincategoryActionCreators';


export default function Maincategory() {
  let [data, setData] = useState([])
  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      sortable: false,
      renderCell: ({ row }) => <Link to={`/admin/maincategory/update/${row.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link>
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 110,
      sortable: false,
      renderCell: ({ row }) => <button className='btn btn-danger' onClick={() => deleteRecord(row.id)}><i className='fa fa-trash'></i></button>
    },
  ];

  function deleteRecord(Id) {
    if (window.confirm("Are You Sure to Delete that Item:")) {
      dispatch(deleteMaincategory({id:Id }))
      getAPIData()
    }
  }

  function getAPIData() {
    dispatch(getMaincategory())
    if (MaincategoryStateData.length)
      setData(MaincategoryStateData)
  }
  useEffect(() => {
    getAPIData()
  }, [MaincategoryStateData.length])

  return (
    <>
      <Breadcrum title="admin" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <h5 className='bg-primary text-light text-center p-2'>Maincategory<Link to="/admin/maincategory/create" className='float-end text-light'><i className='fa fa-plus'></i></Link></h5>
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
                      <td><Link to={`/admin/maincategory/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
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