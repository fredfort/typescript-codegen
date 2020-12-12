import { Product, ProductId } from "./api";
import { DefaultApiImpl } from "./types";

let products: Product[] = new Array(10).fill(null).map((_, index) => ({
  id: index.toString(),
  name: `Product ${index}`,
  description: `Product description ${index}`,
}));
const DELAY = 1000;

export class DefaultApi implements DefaultApiImpl {
  createProduct(body?: Product): Promise<Product> {
    return new Promise((resolve, reject) => {
      if (body) {
        const newProduct = { ...body, id: new Date().toString() };
        products.push(newProduct);
        setTimeout(() => resolve(newProduct), DELAY);
      }
      setTimeout(() => reject("body is missing"), DELAY);
    });
  }
  deleteProduct(id: string): Promise<ProductId> {
    return new Promise((resolve, reject) => {
      if (id) {
        setTimeout(() => resolve({ id }), DELAY);
      } else {
        setTimeout(() => reject("id is missing"), DELAY);
      }
    });
  }
  updateProduct(productId: string, body: Product): Promise<Product> {
    return new Promise((resolve, reject) => {
      if (body) {
        products = products.map((product) =>
          product.id?.toString() === productId ? body : product
        );
        setTimeout(() => resolve(body), DELAY);
      }
      setTimeout(() => reject("body is missing"), DELAY);
    });
  }
  getProduct(id: string): Promise<Product> {
    return Promise.resolve({
      id: "123",
      description: "mock product 11",
    });
  }
  getProducts(): Promise<Product[]> {
    return new Promise((resolve) => setTimeout(() => resolve(products), DELAY));
  }
}
