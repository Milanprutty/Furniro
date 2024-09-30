import { useParams } from "react-router-dom";
import { productArray } from "../Products/productData";
import Header from "./Header";
import Navbar from "../navbar/Navbar";
import ProductSection from "./ProductSection";
import { useState } from "react";
import styles from "./Product.module.scss";
import Description from "./Description";
import ProductMap from "../Products/ProductMap";
import Footer from "../Footer/Footer";

const Product = () => {
  const { productId } = useParams();
  const [openIndex, setOpenIndex] = useState(0);

  const infos = [
    {
      name: "Description",
    },
    {
      name: "Reviews",
    },
  ];

  const handleTest = (index: number) => {
    setOpenIndex(index);
  };

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
            id={Product.id}
          />
          <div className={styles.container}>
            {infos.map((item, i) => {
              return (
                <div
                  className={
                    i === openIndex
                      ? `${styles.current}`
                      : `${styles.unselected}`
                  }
                  onClick={() => handleTest(i)}
                  key={i}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <div>
            {infos.map((item, i) => {
              return (
                <Description
                  key={i}
                  isOpen={openIndex === i ? true : false}
                  type={item.name}
                />
              );
            })}
          </div>
          <div
            className="products-section"
            style={{
              marginTop: "40px",
              borderTop: "1px solid #D9D9D9",
              paddingTop: "40px",
            }}
          >
            <div className="products__header">Related Products</div>
            <ProductMap productCount={4} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Product;
