import { ofType } from "redux-observable";
import { from, Observable, of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { API, AppState } from "../../state.types";
import { fetchProductsCompleted, showProductError } from "../products.actions";
import { ProductActions, ProductActionTypes } from "../products.types";

export const getProductsEpic = (
  action$: Observable<ProductActions>,
  _state$: Observable<AppState>,
  api: API
) =>
  action$.pipe(
    ofType(ProductActionTypes.FETCH_PRODUCTS),
    mergeMap(() =>
      from(api.getProducts()).pipe(
        map((response) => fetchProductsCompleted(response)),
        catchError(() => of(showProductError("Could not fetch the products")))
      )
    )
  );
