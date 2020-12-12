import React, { FunctionComponent } from "react";
import { FaTimes } from "react-icons/fa";
import { Product } from "../../api";
import { Flex } from "../../styles/layout";
import Circle from "../Circle/Circle";
import { ProductTile } from "./ProductOverview.style";

interface ProductOverviewProps {
  product: Product;
  onDeleteProduct: (product: Product) => void;
}

const ProductOverview: FunctionComponent<ProductOverviewProps> = ({
  product,
  onDeleteProduct,
}) => {
  const deleteProduct = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.stopPropagation();
    onDeleteProduct(product);
  };
  return (
    <Flex>
      <Circle />
      <ProductTile>{product.name}</ProductTile>
      <FaTimes onClick={deleteProduct} />
    </Flex>
  );
};

export default ProductOverview;
