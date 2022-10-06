import { createReducer } from "@reduxjs/toolkit";
import { requestFormSubmit } from "../actions/requestFormSubmitAction";

// APPLICATION STATE

enum RequestStatusTypes {
    none = "NO_REQUEST",
    active = "ACTIVE_REQUEST",
    success = "REQUEST_SUCCESS",
    error = "REQUEST_ERROR"
}

export interface AppState {
    requestStatus: RequestStatusTypes;
    applesQuantity: number;
    grapesQuantity: number;
    peachesQuantity: number;
}

const initialAppState: AppState = {
    requestStatus: RequestStatusTypes.none,
    applesQuantity: 0,
    grapesQuantity: 0,
    peachesQuantity: 0
}


// const checkoutReducer = createReducer(initialAppState, (builder) => {
//     builder
//         .addCase(requestFormSubmit, (state, action) => {
//             state.requestStatus = RequestStatusTypes.none,
//                 state.applesQuantity = action.payload || state.applesQuantity,
//                 state.grapesQuantity = action.payload || state.grapesQuantity,
//                 state.peachesQuantity = action.payload || state.peachesQuantity
//         })
// })

// export default checkoutReducer;