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
  {
    header: "Newsletter",
    isAForm: true,
    submitText: "SUBSCRIBE",
  },
];

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer_left-side">
        <div>Funiro</div>
        <div>400 University Drive Suite 200 Coral Gables,</div>
        <span>FL 33134 USA</span>
      </section>
      <section>
        {/*   {footerData.map((item, i) => {
          return (
            <div className="footer__item" key={i}>
              <div>hiiiii</div>
            </div>
          );
        })} */}
      </section>
    </footer>
  );
};

export default Footer;
