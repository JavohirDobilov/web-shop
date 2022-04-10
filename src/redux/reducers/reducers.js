import { ActionType } from "../actions/constType";

const initialState = {
    cart: []
}



export const cartReducer = (state = initialState,action) =>{
    switch(action.type){
        

        case ActionType.ADD_PRODUCT:
            const item = action.payload
                
                return {
                    ...state,
                    cart:[...state.cart,item]
                }
        default:
            return state
    }
}