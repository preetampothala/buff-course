import CourseItem from "../CourseItem/CourseItem";
import styles from "./List.module.css";
const List = (props) => {
  return (
    <ul className={styles.uilist}>
      {props.courses.map((course) => {
        return (
          <CourseItem
            key={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
            instructor={course.instructor}
            rating={course.rating}
          />
        );
      })}
    </ul>
  );
};
export default List;
