import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import productsReducer from "./products/products.reducer";
import rootEpic from "./rootEpic";
import { createEpicMiddleware } from "redux-observable";
import { DefaultApi } from "../api/apiMock";

const epicMiddleware = createEpicMiddleware({
  dependencies: new DefaultApi(),
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ products: productsReducer }),
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
