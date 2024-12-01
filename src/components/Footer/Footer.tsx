import { Link } from "react-router-dom";
import "./Footer.scss";

interface items {
  link: string;
  title: string;
}

interface footerTypes {
  header: string;
  items?: items[];
  isAForm?: boolean;
  submitText?: string;
}

const footerData: footerTypes[] = [
  {
    header: "Links",

    items: [
      { link: "/", title: "Home" },
      { link: "/shop", title: "Shop" },
      { link: "/", title: "About" },
      { link: "/", title: "Contact" },
    ],
  },
  {
    header: "Help",

    items: [
      { link: "/", title: "Payment Options" },
      { link: "/", title: "Returns" },
      { link: "/", title: "Privacy Policies" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer__right-side">
        <div className="footer__left-side">
          <div className="footer__furniro">Furniro.</div>

          <div className="footer__address">
            <div>400 University Drive Suite 200 Coral Gables,</div>
            <span>FL 33134 USA</span>
          </div>
        </div>
        <div className="items">
          {footerData.map((item, i) => {
            return (
              <div className="footer__item" key={i}>
                <div className="footer-item__header">{item.header}</div>
                <div className="footer-item__links">
                  {item.items?.map((linkItem, i) => {
                    return (
                      <div key={i}>
                        <Link to={linkItem.link}>{linkItem.title}</Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="footer__item">
            <div className="footer-item__header">Newsletter</div>
            <div className="footer-item__links">
              <div style={{ display: "flex", gap: "1rem" }}>
                <input
                  className="footer-item__input"
                  placeholder="Enter Your Email Address"
                  type="email"
                  name="email"
                />
                <span className="footer-item__span">subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer__bottom">2024 furniro. All rights reverved</div>
    </footer>
  );
};

export default Footer;
