import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoApp from "./Components/TodoApp";
import { Toaster } from "react-hot-toast";
import Login from "./Components/Login";

import Navber from "./Components/Navber";
import RequireAuth from "./Components/Hooks/RequireAuth";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Navber></Navber>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <TodoApp></TodoApp>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="todoapp"
          element={
            <RequireAuth>
              <TodoApp></TodoApp>
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
