import Card from "../Card/Card";
import styles from "./CourseItem.module.css";
const CourseItem = (props) => {
  const description =
    props.description.length > 10
      ? props.description.slice(0, 50) + " ..."
      : props.description;
  return (
    <Card>
      <li className={styles.listitem}>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.itemcontent}>
          <h3 className={styles.text}>{props.title}</h3>
          <p className={styles.text}>{description}</p>
          <div className={styles.itembottom}>
            <p>{props.instructor}</p>
            <p>{props.rating}</p>
          </div>
        </div>
      </li>
    </Card>
  );
};
export default CourseItem;
