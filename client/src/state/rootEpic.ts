import {
  ActionsObservable,
  combineEpics,
  StateObservable,
} from "redux-observable";
import { catchError } from "rxjs/operators";
import { API } from "./state.types";
import productsEpic from "./products/products.epic";

const epics = [productsEpic];
const rootEpic = (
  action$: ActionsObservable<any>,
  store$: StateObservable<any>,
  dependencies: API
) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export default rootEpic;
