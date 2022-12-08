import { Route } from "react-router-dom";

import { Fragment } from "react";
import Home from "./Pages/Home/Home";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import CartPage from "./Pages/CartPage/CartPage";
import MyCourses from "./Pages/MyCoursesPage/MyCourses";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/course-detail">
        <CourseDetail />
      </Route>
      <Route exact path="/cart">
        <CartPage />
      </Route>
      <Route exact path="/mycourses">
        <MyCourses />
      </Route>
    </Fragment>
  );
}

export default App;
