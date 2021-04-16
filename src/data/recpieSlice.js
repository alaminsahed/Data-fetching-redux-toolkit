import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false  ,
    error: false,
    recepie:[]
}

const recpieSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        getRecipe:(state)=>{
            state.loading = true
        },
        getRecipeSuccess:(state, action)=>{
            state.loading = false
            state.error = false
            state.recepie= action.payload
        },
        getRecipeError:(state)=>{
            state.loading = false
            state.error = true
            
        }

    
    }
});

export const {getRecipe, getRecipeSuccess, getRecipeError} = recpieSlice.actions
export default recpieSlice.reducer


//redux thunk async fetch data

export const fecthData = ()=>{
    return async dispatch =>{
        dispatch(getRecipe());

        try{
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const data = await response.json();
            dispatch(getRecipeSuccess(data.meals));
        }
        catch (error){
            dispatch(getRecipeError(error));
        }
    }
    
}