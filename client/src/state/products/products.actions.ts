import { Product } from "../../api";
import {
  ProductActionTypes,
  FetchProductsAction,
  FetchProductsCompletedAction,
  UpdateProductAction,
  UpdateProductCompletedAction,
  CreateProductAction,
  CreateProductCompletedAction,
  DeleteProductAction,
  DeleteProductCompletedAction,
  ShowProductErrorAction,
} from "./products.types";

const fetchProducts = (): FetchProductsAction => ({
  type: ProductActionTypes.FETCH_PRODUCTS,
});

const fetchProductsCompleted = (
  payload: Product[]
): FetchProductsCompletedAction => ({
  payload,
  type: ProductActionTypes.FETCH_PRODUCTS_COMPLETED,
});

const updateProduct = (payload: Product): UpdateProductAction => ({
  payload,
  type: ProductActionTypes.UPDATE_PRODUCT,
});

const updateProductCompleted = (
  payload: Product
): UpdateProductCompletedAction => ({
  payload,
  type: ProductActionTypes.UPDATE_PRODUCT_COMPLETED,
});

const createProduct = (payload: Product): CreateProductAction => ({
  payload,
  type: ProductActionTypes.CREATE_PRODUCT,
});

const createProductCompleted = (
  payload: Product
): CreateProductCompletedAction => ({
  payload,
  type: ProductActionTypes.CREATE_PRODUCT_COMPLETED,
});

const deleteProduct = (id: Product["id"]): DeleteProductAction => ({
  payload: id,
  type: ProductActionTypes.DELETE_PRODUCT,
});

const deleteProductCompleted = (
  payload: Product["id"]
): DeleteProductCompletedAction => ({
  payload,
  type: ProductActionTypes.DELETE_PRODUCT_COMPLETED,
});

const showProductError = (payload: any): ShowProductErrorAction => ({
  payload,
  type: ProductActionTypes.SHOW_PRODUCT_ERROR,
});

export {
  fetchProducts,
  fetchProductsCompleted,
  createProduct,
  createProductCompleted,
  updateProduct,
  updateProductCompleted,
  deleteProduct,
  deleteProductCompleted,
  showProductError,
};
