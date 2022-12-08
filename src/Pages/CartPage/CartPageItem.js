import styles from "./CartPageItem.module.css";
import Button from "../../UI/Button";
const CartPageItem = () => {
  const Cartclickhandler = () => {
    console.log("clicked");
  };

  return (
    <section className={styles.CartSection}>
      <article className={styles.article}>
        <div className={styles.topone}>
          <div>
            <h3>ATLS 5630 Frontend Development</h3>
            <p>John Doe</p>
          </div>
          <Button className={styles.removebutton} onClick={Cartclickhandler}>
            Remove
          </Button>
        </div>
        <div className={styles.bottom}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        </div>
      </article>
    </section>
  );
};
export default CartPageItem;
