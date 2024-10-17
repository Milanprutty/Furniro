import styles from "./Checkout.module.scss";

const CheckoutDetails = () => {
  return (
    <section className={styles.left}>
      <h1 className={styles.h1}>Billing Details</h1>
      <div className={styles.names}>
        <div className={styles.namesdiv}>
          <div className={styles.title}>First Name</div>
          <input className={styles.smallinput} type="text" />
        </div>
        <div className={styles.namesdiv}>
          <div className={styles.title}>Last Name</div>
          <input className={styles.smallinput} type="text" />
        </div>
      </div>
      <div className={styles.namesdiv}>
        <div className={styles.title}>Company Name (optional)</div>
        <input className={styles.biginput} />
      </div>
      <div className={styles.namesdiv}>
        <div className={styles.title}>Country Region</div>
        <input className={styles.biginput} required={true} />
      </div>
      <div className={styles.namesdiv}>
        <div className={styles.title}>Street Address</div>
        <input className={styles.biginput} />
      </div>
      <div className={styles.namesdiv}>
        <div className={styles.title}>Town City</div>
        <input className={styles.biginput} />
      </div>
      <div className={styles.namesdiv}>
        <div className={styles.title}>Province</div>
        <input className={styles.biginput} />
      </div>
      <div className={styles.namesdiv}>
        <div className={styles.title}>Zip Code</div>
        <input className={styles.biginput} />
      </div>
      <div className={styles.namesdiv}>
        <div className={styles.title}>Phone</div>
        <input className={styles.biginput} />
      </div>
      <div className={styles.namesdiv}>
        <div className={styles.title}>Email Address</div>
        <input className={styles.biginput} />
      </div>
      <div className={styles.namesdiv}>
        <input
          className={styles.biginput}
          placeholder="Additional information"
        />
      </div>
    </section>
  );
};

export default CheckoutDetails;
