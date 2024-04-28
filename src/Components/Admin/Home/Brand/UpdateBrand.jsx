import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'
import Breadcrum from '../../../Breadcrum'
import Sidebar from '../Sidebar'
import { addBrand, getBrand, updateBrand } from "../../../../store/ActionCreators/BrandActionCreators"

import formValidations from '../../../Validations/formValidations'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


export default function UpdateBrand() {
    let { id } = useParams()
    let [data, setData] = useState({
        name: "",
        pic: ""
    })
    let [show, setShow] = useState(false)
    let [errorMessage, setErrorMessage] = useState({
        name: "",
    })

    let dispatch = useDispatch()
    let BrandStateData = useSelector(state => state.BrandStateData)
    let navigate = useNavigate()
    function getInputData(e) {
        let name = e.target.name
        let value = e.target.files ? e.target.files[0].name : e.target.value

        setErrorMessage((old) => {
            return {
                ...old,
                [name]: e.target.files ? "" : formValidations(e)
            }
        })
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find((x) => x?.length !== 0)
        if (!error) {
            let item = BrandStateData.find((x) => x.name.toLowerCase() === data.name.toLowerCase() && x.id !== id)
            if (item) {
                setErrorMessage((old) => {
                    return {
                        ...old,
                        'name': "Brand Name Already Exits"
                    }
                })
                setShow(true)
            }
            else {
                dispatch(updateBrand({ id: id, name: data.name, pic: data.pic }))
                navigate("/admin/brand")
            }

        }
        else {
            setShow(true)
        }
    }
    function getAPIData() {
        dispatch(getBrand())
        if (BrandStateData.length) {
            var item = BrandStateData.find((x) => x.id === id)
            setData({ ...item })
        }
    }
    useEffect(() => {
        getAPIData()
    }, [BrandStateData.length])
    return (
        <>
            <Breadcrum title="admin" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <h5 className='bg-primary text-light text-center p-2'>Brand
                            <button className='float-end text-light border-0' style={{ background: "none" }} onClick={() => window.history.back()}><i className='fa fa-arrow-left'></i></button></h5>
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name<span className='text-denger'>*</span></label>
                                <input type="text" name="name" value={data.name} onChange={getInputData} placeholder="Brand Name" className='form-control' />
                                {show ? <p className='text-danger px-2 py-1 text-capitalize'>{errorMessage.name}</p> : ""}
                            </div>
                            <div className="mb-3">
                                <label>Pic</label>
                                <input type="file" name="pic" onChange={getInputData} placeholder="Brand Name" className='form-control' />
                                {show ? <p className='text-danger px-2 py-1 text-capitalize'>{errorMessage.pic}</p> : ""}
                            </div>
                            <div className="mb-3">
                                <button type="Submit" className='btn btn-primary w-100'>Update</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}