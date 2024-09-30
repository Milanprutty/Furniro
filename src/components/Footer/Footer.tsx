import "./Footer.scss";

interface footerTypes {
  header: string;
  items?: string[];
  isAForm?: boolean;
  submitText?: string;
}

const footerData: footerTypes[] = [
  {
    header: "Links",
    items: ["Home", "Shop", "About", "Contact"],
  },
  {
    header: "Help",
    items: ["Payment Options", "Returns", "Privacy Policies"],
  },
];

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer__left-side">
        <div className="footer__furniro">Furniro.</div>

        <div className="footer__address">
          <div>400 University Drive Suite 200 Coral Gables,</div>
          <span>FL 33134 USA</span>
        </div>
      </section>
      <section className="footer__right-side">
        {footerData.map((item, i) => {
          return (
            <div className="footer__item" key={i}>
              <div className="footer-item__header">{item.header}</div>
              <div className="footer-item__links">
                {item.items?.map((linkItem, i) => {
                  return <div key={i}>{linkItem}</div>;
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
      </section>
      <div className="footer__bottom">2024 furniro. All rights reverved</div>
    </footer>
  );
};

export default Footer;
