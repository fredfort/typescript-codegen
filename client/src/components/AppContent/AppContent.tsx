import React, { FunctionComponent, useEffect, useState } from "react";
import { Product } from "../../api";
import Card from "../Card/Card";
import Grid from "../Grid/Grid";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import ProductComp from "../Product/Product";
import { ModalFooter } from "../Modal/Modal.style";
import Toast from "../Toast/Toast";
import { connect } from "react-redux";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../state/products/products.actions";
import { AppState } from "../../state/state.types";
import { ProductStateType } from "../../state/products/products.types";
import { isDefined } from "../../utils/global.util";
import ProductOverview from "../ProductOverview/ProductOverview";

interface ReduxStateProps {
  productsState: ProductStateType;
}

interface DispatchProps {
  fetchProducts: typeof fetchProducts;
  createProduct: typeof createProduct;
  updateProduct: typeof updateProduct;
  deleteProduct: typeof deleteProduct;
}

const defaultProduct: Product = {
  id: null,
  description: "",
};

const AppContent: FunctionComponent<ReduxStateProps & DispatchProps> = ({
  productsState: {
    data: products,
    error,
    isFetching,
    deletedItem,
    updatedItem,
  },
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
}) => {
  const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setIsErrorVisible(error !== null);
  }, [error]);

  const onSaveProduct = () => {
    if (!isDefined(product.id)) {
      createProduct(product);
    } else {
      updateProduct(product);
    }
    setProduct(null);
  };

  const onSelectProduct = (product: Product | null) => () => {
    setProduct(product);
  };

  const onCloseModal = () => {
    setProduct(null);
  };

  const onAddProduct = () => setProduct(defaultProduct);
  const onDeleteProduct = (product: Product) => {
    event.stopPropagation();
    deleteProduct(product.id);
  };

  const renderProducts = () =>
    products.map((product) => (
      <Card
        key={product.id}
        clickable={true}
        onClick={onSelectProduct(product)}
        toDelete={isDefined(deletedItem) && product.id === deletedItem}
        toUpdate={!isDefined(product.id) || product.id === updatedItem}
      >
        <ProductOverview product={product} onDeleteProduct={onDeleteProduct} />
      </Card>
    ));

  const renderToast = () => (
    <Toast
      isVisible={isErrorVisible}
      type="error"
      onClose={() => setIsErrorVisible(false)}
    >
      {error}
    </Toast>
  );

  return (
    <>
      <h2>Products</h2>
      {renderToast()}
      <Button onClick={onAddProduct}>Add Product</Button>
      {isFetching ? <Loading /> : <Grid>{renderProducts()}</Grid>}
      <Modal title="Product" open={isDefined(product)} onClose={onCloseModal}>
        <ProductComp product={product} onProductChange={setProduct} />
        <ModalFooter>
          <Button onClick={onSaveProduct}>Save</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const mapStateToProps = (state: AppState): ReduxStateProps => {
  return {
    productsState: state.products,
  };
};

const mapDispatchToProps: DispatchProps = {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(AppContent);
