import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'
import Breadcrum from '../../../Breadcrum'
import Sidebar from '../Sidebar'
import { addSubcategory, getSubcategory } from "../../../../store/ActionCreators/SubcategoryActionCreators"

import formValidations from '../../../Validations/formValidations'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


export default function CreateSubcategory() {
    let [name, setName] = useState("")
    let [show, setShow] = useState(false)
    let [errorMessage, setErrorMessage] = useState("Name Field is Mandatory")

    let dispatch = useDispatch()
    let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let navigate = useNavigate()
    function getInputData(e) {
        setName(e.target.value)
        setErrorMessage(formValidations(e))
        //setShow(false)
    }
    function postData(e) {
        e.preventDefault()
        if (errorMessage.length === 0) {
            let item = SubcategoryStateData.find((x) => x.name.toLowerCase() === name.toLowerCase())
            if (item) {
                setErrorMessage("Subcategory Name Already Exits")
                setShow(true)
            }
            else {
                dispatch(addSubcategory({ name: name }))
                navigate("/admin/subcategory")
            }

        }
        else {
            setShow(true)
        }
    }
    function getAPIData() {
        dispatch(getSubcategory())
    }
    useEffect(() => {
        getAPIData()
    }, [SubcategoryStateData.length])
    return (
        <>
            <Breadcrum title="admin" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <h5 className='bg-primary text-light text-center p-2'>Subcategory
                            <button className='float-end text-light border-0' style={{ background: "none" }} onClick={() => window.history.back()}><i className='fa fa-arrow-left'></i></button></h5>
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name<span className='text-denger'>*</span></label>
                                <input type="text" name="name" onChange={getInputData} placeholder="Subcategory Name" className='form-control' />
                                {show ? <p className='text-danger px-2 py-1 text-capitalize'>{errorMessage}</p> : ""}
                            </div>
                            <div className="mb-3">
                                <button type="Submit" className='btn btn-primary w-100'>Create</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}