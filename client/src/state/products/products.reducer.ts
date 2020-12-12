import { AppState } from "../state.types";
import { ProductActionTypes, ProductActions } from "./products.types";

type ProductState = AppState["products"];

const INITIAL_STATE: ProductState = {
  isFetching: false,
  data: [],
  deletedItem: null,
  updatedItem: null,
  error: null,
};

function productsReducer(
  state: ProductState = INITIAL_STATE,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS: {
      return { ...state, isFetching: true, error: null };
    }
    case ProductActionTypes.FETCH_PRODUCTS_COMPLETED: {
      return { ...state, isFetching: false, data: action.payload };
    }
    case ProductActionTypes.CREATE_PRODUCT: {
      return {
        ...state,
        error: null,
        data: [...state.data, action.payload],
      };
    }
    case ProductActionTypes.CREATE_PRODUCT_COMPLETED: {
      return {
        ...state,
        data: [...state.data.filter((p) => p.id), action.payload],
      };
    }
    case ProductActionTypes.UPDATE_PRODUCT: {
      return {
        ...state,
        error: null,
        updatedItem: action.payload.id,
      };
    }
    case ProductActionTypes.UPDATE_PRODUCT_COMPLETED: {
      return {
        ...state,
        data: state.data.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
        updatedItem: null,
      };
    }
    case ProductActionTypes.DELETE_PRODUCT: {
      return {
        ...state,
        deletedItem: action.payload,
      };
    }
    case ProductActionTypes.DELETE_PRODUCT_COMPLETED: {
      return {
        ...state,
        data: state.data.filter((p) => p.id !== action.payload),
        deletedItem: null,
      };
    }
    case ProductActionTypes.SHOW_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default productsReducer;
