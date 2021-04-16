import { configureStore } from '@reduxjs/toolkit'
import recpieSlice from './recpieSlice'

export default configureStore({
  reducer: {
    recipes: recpieSlice,
  },
})