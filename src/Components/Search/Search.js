import { useRef } from "react";
import styles from "./Search.module.css";

function Search(props) {
  const searchRef = useRef();
  const handleChange = (e) => {
    e.preventDefault();
    props.onSearchChange(searchRef.current.value);
  };
  return (
    <form className={styles.search} onChange={handleChange}>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Search"
        ref={searchRef}
      />
    </form>
  );
}
export default Search;
