import { Fragment } from "react";
import TopNav from "../../Components/TopNav/TopNav";
import CourseDetailMain from "../../Components/CourseDetailMain/CourseDetailMain";
import Container from "../../Components/Container/Container";
const CourseDetail = () => {
  return (
    <Fragment>
      <TopNav />
      <Container>
        <CourseDetailMain course={""} />
      </Container>
    </Fragment>
  );
};
export default CourseDetail;
