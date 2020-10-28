import { Product } from "./api";
import { DefaultApiImpl } from "./types";

export class DefaultApi implements DefaultApiImpl {
  getProduct(id: string, options?: any): Promise<Product> {
    return Promise.resolve({
      id: 123,
      description: "mock product 1",
    });
  }
  getProducts(options?: any): Promise<Product[]> {
    return Promise.resolve([
      {
        id: 123,
        description: "mock product 1",
      },
      {
        id: 456,
        description: "mock product 2",
      },
    ]);
  }
}
