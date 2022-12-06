import { Fragment } from "react";
import CartIcon from "./CartIcon";
import styles from "./Cart.module.css";
import Button from "../../UI/Button";
const Cart = () => {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <Fragment>
      <Button className={styles.button} onClick={clickHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.cartcount}>3</span>
      </Button>
    </Fragment>
  );
};

export default Cart;
