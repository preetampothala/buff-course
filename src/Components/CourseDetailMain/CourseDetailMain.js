import styles from "./CourseDetailMain.module.css";
import { Fragment } from "react";

const CourseDetailMain = (props) => {
  return (
    <Fragment>
      <div className={styles.course_detail_main}>
        <div className={styles.detailsmaincontent}>
          <div className={styles.top}>
            <div className={styles.topone}>
              <h2>ATLS 5630 Frontend Development</h2>
              <button>Add to cart</button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
              libero justo laoreet sit amet cursus sit amet.
            </p>
          </div>
          <div class={styles.marginbot}>
            <p>Instruction Mode: In Person</p>
            <p>Maximum Enrollment: 10</p>
            <p>Seats Available: 5</p>
            <p>Credit Hours: 3</p>
          </div>
          <div>
            <h4>John Doe</h4>
            <h4>4.8</h4>
          </div>
        </div>
      </div>
      <section className={styles.cdSections}>
        <article className={styles.articles}>
          <h3 className={styles.marginbot}>Course Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
            libero justo laoreet sit amet cursus sit amet. Sed odio morbi quis
            commodo odio aenean sed adipiscing. Elit ullamcorper dignissim cras
            tincidunt lobortis feugiat vivamus at augue.
          </p>
        </article>
        <article className={styles.articles}>
          <h3 className={styles.marginbot}>Course Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
            libero justo laoreet sit amet cursus sit amet. Sed odio morbi quis
            commodo odio aenean sed adipiscing. Elit ullamcorper dignissim cras
            tincidunt lobortis feugiat vivamus at augue.
          </p>
        </article>
        <article className={styles.articles}>
          <h3 className={styles.marginbot}>Course Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
            libero justo laoreet sit amet cursus sit amet. Sed odio morbi quis
            commodo odio aenean sed adipiscing. Elit ullamcorper dignissim cras
            tincidunt lobortis feugiat vivamus at augue.
          </p>
        </article>
      </section>
    </Fragment>
  );
};
export default CourseDetailMain;
