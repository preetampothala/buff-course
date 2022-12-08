import React, { Fragment } from "react";
import styles from "./Filter.module.css";
const Filter = () => {
  return (
    <Fragment>
      <select className={styles.filter}>
        <option disabled>Select Department</option>
        <option value="lowest">Lowest</option>
        <option value="highest">Highest</option>
      </select>
    </Fragment>
  );
};

export default Filter;
