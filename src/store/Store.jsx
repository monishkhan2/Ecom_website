import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga"

import RootReducer from "./Reducers/RootReducers"
import RootSagas from "./Sagas/RootSagas"

const SagaMiddleWare = createSagaMiddleWare()

const Store = configureStore({
    reducer: RootReducer,
    middleware: () => [SagaMiddleWare]
})
export default Store
SagaMiddleWare.run(RootSagas)