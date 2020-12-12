import { ofType } from "redux-observable";
import { from, Observable, of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { API, AppState } from "../../state.types";
import { createProductCompleted, showProductError } from "../products.actions";
import { ProductActionTypes, CreateProductAction } from "../products.types";

export const createProductEpic = (
  action$: Observable<CreateProductAction>,
  _state$: Observable<AppState>,
  api: API
) =>
  action$.pipe(
    ofType(ProductActionTypes.CREATE_PRODUCT),
    mergeMap(({ payload: product }) =>
      from(api.createProduct(product)).pipe(
        map((newProduct) => createProductCompleted(newProduct)),
        catchError(() => of(showProductError("Could not create the product")))
      )
    )
  );
