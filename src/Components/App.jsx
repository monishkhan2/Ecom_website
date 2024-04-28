import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Error from './Error'
import Contact from './Contact'
import AdminHome from './Admin/Home/AdminHome'
import Maincategory from './Admin/Home/Maincategory/Maincategory'
import CreateMaincategory from './Admin/Home/Maincategory/CreateMaincategory'
import UpdateMaincategory from './Admin/Home/Maincategory/UpdateMaincategory'

import Subcategory from './Admin/Home/Subcategory/Subcategory'
import CreateSubcategory from './Admin/Home/Subcategory/CreateSubcategory'
import UpdateSubcategory from './Admin/Home/Subcategory/UpdateSubcategory'

import Brand from './Admin/Home/Brand/Brand'
import CreateBrand from './Admin/Home/Brand/CreateBrand'
import UpdateBrand from './Admin/Home/Brand/UpdateBrand'

import Product from './Admin/Home/Product/Product'
import CreateProduct from './Admin/Home/Product/CreateProduct'
import UpdateProduct from './Admin/Home/Product/UpdateProduct'

import Testimonial from './Admin/Home/Testimonial/Testimonial'
import CreateTestimonial from './Admin/Home/Testimonial/CreateTestimonial'
import UpdateTestimonial from './Admin/Home/Testimonial/UpdateTestimonial'
import Shop from './Shop'
import SingleProduct from './SingleProduct'
import Profile from './Profile'
import Cart from './Cart'
import Logout from './Logout'
import Checkout from './Checkout'
import Signup from './Signup'
import Login from './Login'
import UpdateProfile from './UpdateProfile'



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

          {/* Buyer Routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/update-profile" element={<UpdateProfile/>} />

          {/* Admin Routes */}
        <Route path="/admin" element={<AdminHome />} />


        <Route path="/admin/maincategory" element={<Maincategory />} />
        <Route path="/admin/maincategory/create" element={<CreateMaincategory />} />
        <Route path="/admin/maincategory/update/:id" element={<UpdateMaincategory />} />

        <Route path="/admin/subcategory" element={<Subcategory />} />
        <Route path="/admin/subcategory/create" element={<CreateSubcategory />} />
        <Route path="/admin/subcategory/update/:id" element={<UpdateSubcategory/>} />

        <Route path="/admin/brand" element={<Brand />} />
        <Route path="/admin/brand/create" element={<CreateBrand />} />
        <Route path="/admin/brand/update/:id" element={<UpdateBrand/>} />

        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/product/create" element={<CreateProduct />} />
        <Route path="/admin/product/update/:id" element={<UpdateProduct/>} />

        <Route path="/admin/testimonial" element={<Testimonial />} />
        <Route path="/admin/testimonial/create" element={<CreateTestimonial />} />
        <Route path="/admin/testimonial/update/:id" element={<UpdateTestimonial/>} />



        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
