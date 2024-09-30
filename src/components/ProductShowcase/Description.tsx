import styles from "./Product.module.scss";

interface Props {
  type: string;
  isOpen: boolean;
}

const Description = ({ type, isOpen }: Props) => {
  if (type === "Description") {
    return (
      <div
        className={
          isOpen === true
            ? `${styles.displaying} ${styles.description}`
            : `${styles.hidden}`
        }
      >
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          autem officia consequuntur error blanditiis hic eaque sed distinctio
          enim aliquam? Sequi vel, vitae amet nam dolore pariatur ad quos vero.
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          nulla illum enim suscipit eveniet non quo sint ducimus maxime.
          Pariatur, nam ex! Ex dolorum modi quasi! Ipsam, aspernatur. Dolores,
          facilis.
        </div>
      </div>
    );
  }

  return (
    <div
      className={isOpen === true ? `${styles.displaying}` : `${styles.hidden}`}
    >
      <div>Reviews </div>
    </div>
  );
};

export default Description;
