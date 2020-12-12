import { combineEpics } from "redux-observable";
import { getProductsEpic } from "./epics/getProducts.epic";
import { updateProductEpic } from "./epics/updateProduct.epic";
import { createProductEpic } from "./epics/createProduct.epic";
import { deleteProductEpic } from "./epics/deleteProduct.epic";

export default combineEpics(
  getProductsEpic,
  updateProductEpic,
  createProductEpic,
  deleteProductEpic
);
