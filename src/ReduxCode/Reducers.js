import { createSlice ,current } from '@reduxjs/toolkit';

export const UserAuthSlice=createSlice({
    name:'authContext',
    initialState:{
        
        userData:{},value:false
    },
    reducers:{
        changeUserAuth:(state,action) => {return {...current(state),value:action.payload}},
        setUserData:(state,action)=>{
            return { ...current(state),userData:action.payload}
        },
        AddUserAddress:(state,action)=>{
            return {...current(state)}
        }
    }
})



export const {changeUserAuth,setUserData}=UserAuthSlice.actions;

