import { ActionType } from "./constType";




export const addProduct = (product) =>{
    return {
        type:ActionType.ADD_PRODUCT,
        payload:product
    }
}


