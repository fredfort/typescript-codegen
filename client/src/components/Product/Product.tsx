import React, { FunctionComponent, useEffect, useState } from "react";
import { Product } from "../../api";
import InputGroup from "../InputGroup/InputGroup";

interface ProductCompProps {
  product: Product | null;
  onProductChange: (product: Product) => void;
}

const defaultProduct: Product = {
  id: undefined,
  description: "",
  name: "",
};
const ProductComp: FunctionComponent<ProductCompProps> = ({
  product = defaultProduct,
  onProductChange,
}) => {
  const onChangeName = (evt: React.ChangeEvent<HTMLInputElement>) =>
    onProductChange({ ...product, name: evt.target.value });

  const onChangeDescription = (evt: React.ChangeEvent<HTMLInputElement>) =>
    onProductChange({ ...product, description: evt.target.value });

  return (
    <>
      <InputGroup value={product?.name} label="Name" onChange={onChangeName} />
      <InputGroup
        value={product?.description}
        label="Description"
        onChange={onChangeDescription}
      />
    </>
  );
};

export default ProductComp;
