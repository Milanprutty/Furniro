import Trophy from "../../assets/Trophy.svg";
import Shipping from "../../assets/Shipping.svg";
import Guarantee from "../../assets/Guarantee.svg";
import CustomerSupport from "../../assets/CustomerSupport.svg";

export interface Features {
  header: string;
  description: string;
  image: string;
}

export const shopFeatures: Features[] = [
  {
    header: "High Quality",
    description: "crafted from top materials",
    image: Trophy,
  },
  {
    header: "Warranty Protection",
    description: "Over 2 years",
    image: Guarantee,
  },
  {
    header: "Free Shipping",
    description: "Order over 150 $",
    image: Shipping,
  },
  {
    header: "24 / 7 Support",
    description: "Dedicated support",
    image: CustomerSupport,
  },
];
