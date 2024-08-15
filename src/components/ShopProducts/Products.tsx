import { useEffect, useState } from "react";
import "../Products/Products.scss";
import { productArray } from "../Products/productData";
import Product from "../Products/Product";

interface Props {
  currentOption: number;
}

const Products = ({ currentOption }: Props) => {
  const [startingPoint, setStartingPoint] = useState(0);
  const [displayed, setDisplayed] = useState(currentOption);
  const [classNamer, setClassName] = useState("test1");

  const Buttons = Array.from(
    { length: Math.ceil(productArray.length / currentOption) },
    (_, i) => (
      <button
        style={{
          width: "60px",
          height: "60px",
          fontSize: "20px",
          borderRadius: "10px",
          color: "white",
        }}
        className="reusable-Button"
        key={i}
        onClick={() => handleClick(i)}
      >
        {i + 1}
      </button>
    )
  );

  const [content, setContent] = useState(Buttons);

  const handleClick = (index: number) => {
    const handlePageChange = () => {
      setStartingPoint(index * currentOption);
      setDisplayed((index + 1) * currentOption);
      setClassName("test2");
    };
    handlePageChange();

    const edited = content.map((item, i) => {
      if (i === index) {
        const newProps = { className: "new" };
        return { ...item, props: newProps };
      } else {
        const props = item.props;
        const newProps = { ...props, className: "reusable-Button" };
        return { ...item, props: newProps };
      }
    });

    setContent(edited);
  };

  useEffect(() => {
    setDisplayed(currentOption);
    setStartingPoint(0);
  }, [currentOption]);

  return (
    <div className="products-section">
      <div style={{ marginTop: "50px" }} className="product-container">
        {productArray.slice(startingPoint, displayed).map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
      <div>
        <div className={classNamer} style={{ display: "flex", gap: "2rem" }}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Products;
