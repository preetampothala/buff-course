import TopNav from "../../Components/TopNav/TopNav";
import styles from "./CartPage.module.css";
import Container from "../../Components/Container/Container";
import CartPageItem from "./CartPageItem";
import Button from "../../UI/Button";
const CartPage = () => {
  const EnrollClickhandler = () => {
    console.log("clicked");
  };
  return (
    <>
      <TopNav />
      <Container>
        <div className={styles.cartpage}>
          <h1 className={styles.title}>Cart</h1>
          <CartPageItem />
          <CartPageItem />
          <Button className={styles.enrollbutton} onClick={EnrollClickhandler}>
            Enroll Courses
          </Button>
        </div>
      </Container>
    </>
  );
};
export default CartPage;
