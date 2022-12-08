import { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css";
import Cart from "../Cart/Cart";
const TopNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>Buff Course Search</h1>
      </div>
      <h4 className={styles.welcomeText}>Welcome to Course Search portal</h4>
      <div className={styles.links}>
        <NavLink
          activeClassName={styles.active}
          to="/mycourses"
          className={styles.linksp}
        >
          My Courses
        </NavLink>
        <Cart />
        {/* <Link to="/home">My Courses</Link>
        <Link to="/course-detail">Course Detail</Link> */}
      </div>
    </nav>
  );
};
export default TopNav;
