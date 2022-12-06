import { Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import CartPage from "./Pages/Cart/CartPage";
import "./App.css";

function App() {
  return (
    <div>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/course-detail">
        <CourseDetail />
      </Route>
      <Route exact path="/cart">
        <CartPage />
      </Route>
    </div>
  );
}

export default App;
