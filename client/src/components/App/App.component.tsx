import React, { useEffect, useState } from "react";
import { DefaultApi } from "../../api/api";
import { Product } from "../../api";
export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const api = new DefaultApi();
    api.getProducts().then((products) => setProducts(products));
  }, []);

  const renderProducts = () =>
    products.map((product) => (
      <div key={product.id}>{product.description}</div>
    ));

  return (
    <div>
      <h2>Products</h2>
      <div>{renderProducts()}</div>
    </div>
  );
}
