import TopNav from "../../Components/TopNav/TopNav";
import List from "../../Components/List/List";
import Search from "../../Components/Search/Search";
import { Fragment, useState } from "react";
import Container from "../../Components/Container/Container";
const coursesArray = [
  {
    id: 1,
    title: "React",
    description: "React is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
    department: "ATLS",
  },
  {
    id: 2,
    title: "Frontend",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
    department: "ATLS",
  },
  {
    id: 3,
    title: "ATLS 5429 Swift",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
    department: "ATLS",
  },
  {
    id: 4,
    title: "DS 5346 Statistics",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
    department: "Data Science",
  },
  {
    id: 5,
    title: "DS 5120 Python Introduction",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
    department: "Data Science",
  },
  {
    id: 6,
    title: "Machine Learning",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
  },
  {
    id: 7,
    title: "p5.js",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
  },
];
let filteredCourse;

const Home = () => {
  const [courses, setCourses] = useState(coursesArray);

  const filterlist = (searchText) => {
    console.log(searchText);
    filteredCourse = coursesArray.filter((course) => {
      return course.title.toLowerCase() === searchText.toLowerCase();
    });
    setCourses(searchText.length > 0 ? filteredCourse : coursesArray);
  };

  return (
    <Fragment>
      <TopNav />
      <Container>
        <Search onSearchChange={filterlist} />
        <List courses={courses} />
      </Container>
    </Fragment>
  );
};

export default Home;
