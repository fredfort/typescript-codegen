import { ofType } from "redux-observable";
import { from, Observable, of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { API, AppState } from "../../state.types";
import { showProductError, updateProductCompleted } from "../products.actions";
import { ProductActionTypes, UpdateProductAction } from "../products.types";

export const updateProductEpic = (
  action$: Observable<UpdateProductAction>,
  _state$: Observable<AppState>,
  api: API
) =>
  action$.pipe(
    ofType(ProductActionTypes.UPDATE_PRODUCT),
    mergeMap(({ payload: product }) =>
      from(api.updateProduct(product.id.toString(), product)).pipe(
        map((updateProduct) => updateProductCompleted(updateProduct)),
        catchError(() => of(showProductError("Could not update the product")))
      )
    )
  );
