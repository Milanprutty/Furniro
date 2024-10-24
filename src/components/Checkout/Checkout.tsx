import FeatureFrame from "../FeatureFrame/FeatureFrame";
import Footer from "../Footer/Footer";
import CheckoutDetails from "./CheckoutDetails";
import CheckoutPayment from "./CheckoutPayment";

const Checkout = () => {
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <CheckoutDetails />
        <CheckoutPayment />
      </div>
      <FeatureFrame />
      <Footer />
    </section>
  );
};

export default Checkout;
