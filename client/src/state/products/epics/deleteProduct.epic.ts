import { ofType } from "redux-observable";
import { from, Observable, of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { API, AppState } from "../../state.types";
import { deleteProductCompleted, showProductError } from "../products.actions";
import { ProductActionTypes, DeleteProductAction } from "../products.types";

export const deleteProductEpic = (
  action$: Observable<DeleteProductAction>,
  _state$: Observable<AppState>,
  api: API
) =>
  action$.pipe(
    ofType(ProductActionTypes.DELETE_PRODUCT),
    mergeMap(({ payload: productId }) =>
      from(api.deleteProduct(productId)).pipe(
        map((productId) => deleteProductCompleted(productId.id)),
        catchError(() => of(showProductError("Could not delete the product")))
      )
    )
  );
