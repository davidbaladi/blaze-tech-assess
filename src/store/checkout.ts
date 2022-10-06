import { ComponentState } from "../pages/groceryStoreReducer";

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


// ACTIONS

interface RequestFormSubmitAction {
    type: "REQUEST_FORM_SUBMIT",
    requestStatus: RequestStatusTypes.active,
    newCheckoutState: ComponentState
}
interface FormSubmitSuccess {
    type: "FORM_SUBMIT_SUCCESS",
    requestStatus: RequestStatusTypes.success
}
interface FormSubmitError {
    type: "FORM_SUBMIT_ERROR",
    requestStatus: RequestStatusTypes.error
}
interface ClearAppStateAction {
    type: "CLEAR_APP_STATE",
    requestStatus: RequestStatusTypes.error
}

//

interface RequestSubmitPurchase {
    type: "REQUEST_SUBMIT_PURCHASE",
    requestStatus: RequestStatusTypes.active
}


export type UserActions = RequestFormSubmitAction | FormSubmitSuccess | FormSubmitError | RequestSubmitPurchase | ClearAppStateAction

//ACTION CREATORS

export const actionCreators = {
    requestFormSubmit: (newCheckoutState: ComponentState) => {
        return ({
            type: "REQUEST_FORM_SUBMIT",
            newCheckoutState
        } as RequestFormSubmitAction);
    }
}

// REDUCERS


export default (state: AppState = initialAppState, action: UserActions): AppState => {
    switch (action.type) {
        case "REQUEST_FORM_SUBMIT":
            return {
                ...state,
                ...{
                    requestStatus: RequestStatusTypes.none,
                    applesQuantity: action.newCheckoutState.applesQuantity,
                    grapesQuantity: action.newCheckoutState.grapesQuantity,
                    peachesQuantity: action.newCheckoutState.peachesQuantity,
                }
            }
        default:
            return state;
    }
}