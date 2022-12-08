import TopNav from "../../Components/TopNav/TopNav";
import List from "../../Components/List/List";
import Search from "../../Components/Search/Search";
import { Fragment, useState } from "react";
import Container from "../../Components/Container/Container";
import Filter from "../../Components/Filter/Filter";
import styles from "./Home.module.css";
const coursesArray = [];
const Home = () => {
  const [courses, setCourses] = useState(coursesArray);

  const filterlist = (searchText) => {
    console.log(searchText);
    if (searchText.length <= 0) {
      setCourses(coursesArray);
    }
    const filteredCourses = coursesArray.filter((course) => {
      return course.title.toLowerCase().includes(searchText.toLowerCase());
    });
    setCourses(filteredCourses);
  };

  return (
    <Fragment>
      <TopNav />
      <Container>
        <div className={styles.searchfilter}>
          <Filter />
          <Search onSearchChange={filterlist} />
        </div>

        <List courses={courses} />
      </Container>
    </Fragment>
  );
};

export default Home;
