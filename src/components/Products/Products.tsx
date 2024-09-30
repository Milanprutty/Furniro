import "./Products.scss";

import ProductMap from "./ProductMap";

const Products = () => {
  return (
    <div className="products-section">
      <div className="products__header">Our Products</div>
      <ProductMap productCount={8} />
    </div>
  );
};

export default Products;
