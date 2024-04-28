import React, { useEffect, useRef, useState } from 'react'
//import { Link } from 'react-router-dom'
import Breadcrum from '../../../Breadcrum'
import Sidebar from '../Sidebar'
import { addProduct, getProduct, updateProduct } from "../../../../store/ActionCreators/ProductActionCreators "
import { getMaincategory } from "../../../../store/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../../../../store/ActionCreators/SubcategoryActionCreators"
import { getBrand } from "../../../../store/ActionCreators/BrandActionCreators"


import formValidations from '../../../Validations/formValidations'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import imageValidation from '../../../Validations/imageValidation'

var rte;
export default function UpdateProduct() {
    let [flag, setFlag] = useState(false)
    let { id } = useParams()
    let [data, setData] = useState({
        name: "",
        pic: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: "",
        size: "",
        baseprice: 0,
        discount: 0,
        finalprice: 0,
        stock: true,
        description: "",
        quantity: 0,
        pic: []
    })
    let [show, setShow] = useState(false)
    let [errorMessage, setErrorMessage] = useState({
        name: "",
        color: "",
        size: "",
        baseprice: "",
        discount: "",
        quantity: "",
        pic: ""
    })

    let dispatch = useDispatch()
    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let BrandStateData = useSelector(state => state.BrandStateData)
    let ProductStateData = useSelector(state => state.ProductStateData)

    let navigate = useNavigate()
    var refdiv = useRef(null);


    function getInputData(e) {
        let name = e.target.name
        let value = e.target.files ? e.target.files : e.target.value

        setErrorMessage((old) => {
            return {
                ...old,
                [name]: e.target.files ? imageValidation(e) : formValidations(e)
            }
        })
        setData((old) => {
            return {
                ...old,
                [name]: e.target.files ? data.pic.concat(Array.from(value).map((x) => x.name)) : value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find((x) => x?.length !== 0)
        if (!error) {
            let bp = parseInt(data.baseprice)
            let d = parseInt(data.discount)
            let fp = parseInt(bp - bp * d / 100)
            let item = {
                id: id,
                name: data.name,
                maincategory: data.maincategory,
                subcategory: data.subcategory,
                brand: data.brand,
                baseprice: bp,
                discount: d,
                finalprice: fp,
                color: data.color,
                size: data.size,
                stock: data.stock,
                description: rte.getHTMLCode(),
                quantity: parseInt(data.quantity),
                pic: data.pic,
            }
            dispatch(updateProduct(item))
            navigate("/admin/product")
        }
        else
            setShow(true)

    }
    function getAPIData() {
        rte = new window.RichTextEditor(refdiv.current);
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        dispatch(getProduct())
        if (ProductStateData.length) {
            let item = ProductStateData.find((x) => x.id === id)
            if (item) {
                setData({ ...item })
                if (item.description) {
                    rte.setHTMLCode(item.description);
                }
            }
        }
    }
    useEffect(() => {
        getAPIData()
    }, [MaincategoryStateData.length, SubcategoryStateData.length, BrandStateData.length])
    return (
        <>
            <Breadcrum title="admin" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <h5 className='bg-primary text-light text-center p-2'>Product
                            <button className='float-end text-light border-0' style={{ background: "none" }} onClick={() => window.history.back()}><i className='fa fa-arrow-left'></i></button></h5>
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name<span className='text-denger'>*</span></label>
                                <input type="text" name="name" value={data.name} onChange={getInputData} placeholder="Product Name" className='form-control' />
                                {show ? <p className='text-danger px-2 py-1 text-capitalize'>{errorMessage.name}</p> : ""}
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Maincategory<span className='text-denger'>*</span></label>
                                    <select name='maincategory' value={data.maincategory} onChange={getInputData} className='form-select'>
                                        {
                                            MaincategoryStateData.map((item, index) => {
                                                return <option key={index}>{item.name}</option>

                                            })
                                        }
                                    </select>

                                </div>
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Subcategory<span className='text-denger'>*</span></label>
                                    <select name='subcategory' value={data.subcategory} onChange={getInputData} className='form-select'>
                                        {
                                            SubcategoryStateData.map((item, index) => {
                                                return <option key={index}>{item.name}</option>

                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Brand<span className='text-denger'>*</span></label>
                                    <select name='brand' value={data.brand} onChange={getInputData} className='form-select'>
                                        {
                                            BrandStateData.map((item, index) => {
                                                return <option key={index}>{item.name}</option>

                                            })
                                        }
                                    </select>

                                </div>
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Stock<span className='text-denger'>*</span></label>
                                    <select name='stock' value={data.stock} onChange={getInputData} className='form-select'>
                                        <option value={true}>In Stock</option>
                                        <option value={false}>Out Of Stock</option>

                                    </select>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label>Base Price<span className='text-denger'>*</span></label>
                                    <input type='number' name="baseprice" value={data.baseprice} onChange={getInputData} className='form-control' placeholder='Base Price' />
                                    {show ? <p className='text-denger px-2 py-1 text-capitalize'>{errorMessage.baseprice}</p> : ""}
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>Discount<span className='text-denger'>*</span></label>
                                    <input type='number' name="discount" value={data.discount} onChange={getInputData} className='form-control' placeholder='Discount' />
                                    {show ? <p className='text-denger px-2 py-1 text-capitalize'>{errorMessage.discount}</p> : ""}
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>Stock Quantity<span className='text-denger'>*</span></label>
                                    <input type='number' name="quantity" value={data.quantity} onChange={getInputData} className='form-control' placeholder='Stock Quantity' />
                                    {show ? <p className='text-denger px-2 py-1 text-capitalize'>{errorMessage.quantity}</p> : ""}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Color<span className='text-denger'>*</span></label>
                                    <input type='text' name="color" value={data.color} onChange={getInputData} className='form-control' placeholder='Color' />
                                    {show ? <p className='text-denger px-2 py-1 text-capitalize'>{errorMessage.color}</p> : ""}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Size<span className='text-denger'>*</span></label>
                                    <input type='text' name="size" value={data.size} onChange={getInputData} className='form-control' placeholder='Size' />
                                    {show ? <p className='text-denger px-2 py-1 text-capitalize'>{errorMessage.size}</p> : ""}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label>Description</label>
                                <div className='w-100' ref={refdiv}></div>
                            </div>

                            <div className="mb-3">
                                <label>Pic</label>
                                <input type="file" name="pic" multiple onChange={getInputData} placeholder="Product Name" className='form-control' />
                                {show ? <p className='text-danger px-2 py-1 text-capitalize'>{errorMessage.pic}</p> : ""}
                            </div>
                            {data.pic.length ? <p>Click on Image to Delete</p> : ""}
                            <div className='d-flex flex-wrap'>
                                {
                                    data.pic.map((item, index) => {
                                        return <div key={index} className='m-1'>
                                            <img src={`/images/${item}`} height={50} width={50} onClick={() => {
                                                data.pic.splice(index, 1)
                                                setFlag(!flag)
                                            }} />
                                        </div>
                                    })

                                }
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