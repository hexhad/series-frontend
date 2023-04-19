import React from "react";
import "./global.scss";
import MainScreen from "./routes/MainScreen";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import Cast from "./routes/Cast";
import NotFoundPage from "./routes/NotFound";
import AllCast from "./routes/AllCast";
import "./global.scss";

function App() {
  const location = useLocation();
  return (
    <>
      <nav className="nav">
        <NavLink
          className="nav-link"
          to="/series-frontend/"
          style={({ isActive }) => {
            return isActive ? { color: "red" } : {};
          }}
        >
          Home
        </NavLink>

        <Link className="nav-link" to="/series-frontend/cast">
          Cast
        </Link>

        {/* {location.state} */}
      </nav>

      <Routes>
        <Route path="/series-frontend/" element={<MainScreen />} />
        <Route path="/series-frontend/cast">
          <Route index element={<AllCast />} />
          <Route path=":id" element={<Cast />} />
        </Route>
        {/* <Route path="/cast/:id" element={<Cast />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
