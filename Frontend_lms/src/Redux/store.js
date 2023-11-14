import { configureStore } from '@reduxjs/toolkit'

import authSliceReducer from './Slices/AuthSlice'

const store = configureStore({
    reducers: {
        auth: authSliceReducer
    },
    devTools: true
})

export default store