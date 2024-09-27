import { createContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { changeTheme } from "./features/home/homeSlice";
import { useSelector, useDispatch } from "react-redux";
import Settings from "./Pages/Settings";
import Home from "./Pages/Home";
import AboutUs from "./Pages/About";
import Login from "./Authentication/Login";
import ProtectedRoute from "./ProtectedRoute";

export const ThemeContext = createContext();

function App() {
  const theme = useSelector((state) => state.home.theme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(changeTheme(!theme));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/home" exact element={<Home />}></Route>
              <Route path="/about" exact element={<AboutUs />}></Route>
              <Route path="/settings" exact element={<Settings />}></Route>
            </Route>
            <Route path="/login" exact element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
