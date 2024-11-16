import { ProductTypes } from "../actions/ActionTypes"

const initialValue = {
    allProducts : [],
    cart:[],
}

// const {ALL_PRODUCTS} = ProductTypes;
export const ProductReducer = (state=initialValue,{type,payload})=>{
    switch(type){
        case ProductTypes.ALL_PRODUCTS:
            return {...state, allProducts:[...state.allProducts,...payload]}
                                //   [ [{}] ]
                                //    ...
                                // [{}{}{}{}]
        case  ProductTypes.CART_PRODUCT:
            return {...state, cart:[...state.cart,payload]}
            
            case  ProductTypes.REMOVE_CART_PRODUCT:
                return {...state, cart:[...state.cart.filter((item)=>item.id !== payload.id)]}
        default:
            return state;
    }
}