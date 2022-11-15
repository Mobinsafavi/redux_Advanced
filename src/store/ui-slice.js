import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice ({
    name : 'Ui' ,
    initialState : {shownCart : false , notification : null} ,
    reducers : {
        showCartToggler(state){
            state.shownCart = !state.shownCart;
        },
        setNotification (state , action){
            const notificationData = action.payload
            state.notification = {
                status : notificationData.status ,
                message : notificationData.message ,
                title : notificationData.title
            }
        }
    }
})

export const uiSliceAction = uiSlice.actions;

export default uiSlice;