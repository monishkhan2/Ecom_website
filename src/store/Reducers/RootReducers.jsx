import { combineReducers } from "@reduxjs/toolkit"
import MaincategoryReducer from "./MaincategoryReducers"
import SubcategoryReducer from "./SubcategoryReducers"
import BrandReducer from "./BrandReducers"
import ProductReducer from "./ProductReducers"
import TestimonialReducer from "./TestimonialReducers"
import CartReducer from "./CartReducers"
import CheckoutReducer from "./CheckoutReducers"
import WishlistReducer from "./WishlistReducers"

export default combineReducers({
    MaincategoryStateData: MaincategoryReducer,
    SubcategoryStateData: SubcategoryReducer,
    BrandStateData: BrandReducer,
   ProductStateData:ProductReducer,
   TestimonialStateData:TestimonialReducer,
   CartStateData:CartReducer,
   CheckoutStateData:CheckoutReducer,
   WishlistStateData:WishlistReducer,
})