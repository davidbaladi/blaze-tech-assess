export const INITIAL_COMPONENT_STATE = {
    applesQuantity: 0,
    grapesQuantity: 0,
    peachesQuantity: 0
}

export const groceryStoreReducer = (state: ComponentState, action: any) => {
    switch (action.type) {
        case "INCREASE_APPLE_QUANTITY":
            return {
                ...state,
                applesQuantity: state.applesQuantity + 1
            };
        case "DECREASE_APPLE_QUANTITY":
            return {
                ...state,
                applesQuantity: state.applesQuantity > 0 ? state.applesQuantity - 1 : state.applesQuantity
            };
        case "INCREASE_GRAPES_QUANTITY":
            return {
                ...state,
                grapesQuantity: state.grapesQuantity + 1
            };
        case "DECREASE_GRAPES_QUANTITY":
            return {
                ...state,
                grapesQuantity: state.grapesQuantity > 0 ? state.grapesQuantity - 1 : state.grapesQuantity
            };
        case "INCREASE_PEACHES_QUANTITY":
            return {
                ...state,
                peachesQuantity: state.peachesQuantity + 1
            };
        case "DECREASE_PEACHES_QUANTITY":
            return {
                ...state,
                peachesQuantity: state.peachesQuantity > 0 ? state.peachesQuantity - 1 : state.peachesQuantity
            };
        default:
            return state;
    }
}

export interface ComponentState {
    applesQuantity: number,
    grapesQuantity: number,
    peachesQuantity: number
}