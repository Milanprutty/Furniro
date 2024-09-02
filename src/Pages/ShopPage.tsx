import FeatureFrame from "../components/FeatureFrame/FeatureFrame";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ShopBanner from "../components/ShopBanner/ShopBanner";
import ShopProducts from "../components/ShopProducts/ShopProducts";

const ShopPage = () => {
  return (
    <>
      <Navbar />
      <ShopBanner />
      <ShopProducts />
      <FeatureFrame />
      <Footer />
    </>
  );
};

export default ShopPage;
