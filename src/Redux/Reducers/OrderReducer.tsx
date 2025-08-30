import { PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAILURE, PRODUCT_GET_SUCCESS, PRODUCT_GET_FAILURE, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from "../Constant";


const initialState = {
    loading: true,
    products: [],
    error: null
}

const orderReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case PRODUCT_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null
            };
        case PRODUCT_CREATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case PRODUCT_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null
            };
        case PRODUCT_GET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.filter((product: any) => product._id !== action.payload._id),
                error: null
            };
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default orderReducer;
