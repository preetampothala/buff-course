import { useRef } from "react";
import styles from "./Search.module.css";

function Search(props) {
  const searchRef = useRef();
  const handleChange = (e) => {
    props.onSearchChange(searchRef.current.value);
  };
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search"
      ref={searchRef}
      onChange={handleChange}
    />
  );
}
export default Search;
