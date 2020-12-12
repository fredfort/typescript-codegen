import { DefaultApiFactory, Product } from "../api";

export interface Loadable<T, ID> {
  isFetching: boolean;
  updatedItem: ID;
  deletedItem: ID;
  error: string | null;
  data: T;
}
export type API = ReturnType<typeof DefaultApiFactory>;
export type AppState = { products: Loadable<Product[], Product["id"]> };
