import { Action } from "redux";
import { Product } from "../../api";
import { Loadable } from "../state.types";

export type ProductStateType = Loadable<Product[], Product["id"]>;

export enum ProductActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_COMPLETED = "FETCH_PRODUCTS_COMPLETED",
  CREATE_PRODUCT = "CREATE_PRODUCT",
  CREATE_PRODUCT_COMPLETED = "CREATE_PRODUCT_COMPLETED",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  UPDATE_PRODUCT_COMPLETED = "UPDATE_PRODUCT_COMPLETED",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  DELETE_PRODUCT_COMPLETED = "DELETE_PRODUCT_COMPLETED",
  SHOW_PRODUCT_ERROR = "SHOW_PRODUCT_ERROR",
}

export interface FetchProductsAction extends Action {
  type: ProductActionTypes.FETCH_PRODUCTS;
}

export interface FetchProductsCompletedAction extends Action {
  type: ProductActionTypes.FETCH_PRODUCTS_COMPLETED;
  payload: Product[];
}

export interface UpdateProductAction extends Action {
  type: ProductActionTypes.UPDATE_PRODUCT;
  payload: Product;
}

export interface UpdateProductCompletedAction extends Action {
  type: ProductActionTypes.UPDATE_PRODUCT_COMPLETED;
  payload: Product;
}

export interface CreateProductAction extends Action {
  type: ProductActionTypes.CREATE_PRODUCT;
  payload: Product;
}

export interface CreateProductCompletedAction extends Action {
  type: ProductActionTypes.CREATE_PRODUCT_COMPLETED;
  payload: Product;
}

export interface DeleteProductAction extends Action {
  type: ProductActionTypes.DELETE_PRODUCT;
  payload: Product["id"];
}

export interface DeleteProductCompletedAction extends Action {
  type: ProductActionTypes.DELETE_PRODUCT_COMPLETED;
  payload: Product["id"];
}

export interface ShowProductErrorAction extends Action {
  type: ProductActionTypes.SHOW_PRODUCT_ERROR;
  payload: string;
}

export type ProductActions =
  | FetchProductsAction
  | FetchProductsCompletedAction
  | UpdateProductAction
  | UpdateProductCompletedAction
  | CreateProductAction
  | CreateProductCompletedAction
  | DeleteProductAction
  | DeleteProductCompletedAction
  | ShowProductErrorAction;
