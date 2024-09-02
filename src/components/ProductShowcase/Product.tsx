import { useParams } from "react-router-dom";
import { productArray } from "../Products/productData";
import Header from "./Header";
import Navbar from "../navbar/Navbar";
import ProductSection from "./ProductSection";

const Product = () => {
  const { productId } = useParams();

  const Product = productArray.find((product) => {
    return product.id === productId;
  });

  if (!Product) {
    return <div>no product found</div>;
  }

  return (
    <>
      <Navbar />
      {Product && (
        <>
          <Header name={Product.name} />
          <ProductSection
            name={Product.name}
            options={Product.options}
            price={Product.price}
          />
        </>
      )}
    </>
  );
};

export default Product;
